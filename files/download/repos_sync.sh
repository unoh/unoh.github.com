#!/bin/sh

unset http_proxy
#export http_proxy=http://127.0.0.1:3128

# repo mirror site
# list: http://fedora.jp/datapool/yum/repo-mirror/
MIRROR="ftp://ftp.kddilabs.jp/Linux/packages"

# mirror root - the place you want the rpms to be downloaded
MROOT="/var/www/html/repos"

# processor architectures (space separated) i386/i686/x86_64
ARCHS="i386"

# distribution
DISTRIUBTION="fedora"
if [ "$1" != "" ]; then
   DISTRIBUTION=$1
fi

# repository name
REPO="core"
if [ "$2" != "" ]; then
    REPO=$2
fi

downcomps()
{
    wget -N $1/repodata/comps.xml
}

# this part will download the comps.xml files .. it still need some improvements though
getcomps()
{
    case "$1" in
    fedora)
        downcomps $MIRROR/fedora/core/5/$ARCH/os
    ;;
    centos)
        downcomps $MIRROR/centos/5/$ARCH/os
    ;;
    esac
}

downrepo()
{
    MROOT_DIR=
    case "$1" in
    fedora)
        MROOT_DIR=$MROOT/fedora/core/5/$ARCH
    ;;
    centos)
        MROOT_DIR=$MROOT/centos/5/$ARCH
    ;;
    *)
        echo "Unknown distribution $1"
        exit -1
    ;;
    esac

    if [ ! -d $MROOT_DIR ]; then
        mkdir -p $MROOT_DIR
    fi

    cd $MROOT_DIR
    echo "Sychronizing Repositories"
    reposync -r $2 -n -t /var/cache/yum
    STAT=$?
    if [ "$STAT" == "0" ]; then
        echo "Cleaning old packages"
        repomanage --old . | grep -v 'kernel\-' | grep -v -i 'nvidia' | grep -v -i 'fglrx' | xargs rm -rf
        rm -rf .repodata .olddata
        echo "Recreating repodata"
        getcomps $1
        if [ -e comps.xml ]; then
            createrepo --groupfile comps.xml .
        else
            createrepo .
        fi
    fi
}


for ARCH in $ARCHS; do
    echo downloading $REPO $ARCH
    downrepo $DISTRIBUTION $REPO $ARCH
done
