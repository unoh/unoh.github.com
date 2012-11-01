#include <string>
#include <iostream>
#include <vector>
#include <math.h>
#include <fstream>
#include <errno.h>
#include <sys/timeb.h>
#include <cstdio>

extern int errno;
using namespace std;

void gen_str(int i, string &s, const int deep, vector<string> &target, const int max) {
  for (char c = 'a'; c <= 'z' ; c++) {
    if (max <= target.size()) {
      return; 
    }
    s[i] = c;
    if (i == deep) {
      target.push_back(s);
    } else {
      string temp = s;
      gen_str(i + 1, temp, deep, target, max);
   }
  }
}

bool make_file(const vector<string> &target) {
  for(vector<string>::const_iterator p = target.begin(); p != target.end(); p++) {
    std::fstream fs((*p).c_str(), ios::out);
    if (fs.fail()) {
      cout << strerror(errno) << "make file failed" << endl;
      return false;
    }
    fs << *p;
  }
  return true;
}

bool random_access(const int num ,const vector<string> &target) {
  srand((unsigned) time(NULL));
  const size_t size = target.size();
  std::string str;
  for (int i = 0 ; i < num ; i++) {
    string s = target[rand() % size];
    std::ifstream ifs(s.c_str());
    ifs >> str;
  }
}

bool remove_file(const vector<string> &target) {
  for (vector<string>::const_iterator p = target.begin(); p != target.end(); p++) {
    std::remove((*p).c_str());
  }
}

int timer(timeb *before = NULL) {
  static timeb sub;
  if (sub.time != 0) {
    ftime(before);
    int t1 = before->time - sub.time;
    int t2 = before->millitm - sub.millitm;
    sub = *before;
    return t1 * 1000 + t2;
  } else {
    ftime(before);
    sub = *before;
    return 0;
  }
}

void help() {
  cout << "-c N: N files are created" << endl;
  cout << "-a N: access files at random" << endl;
  cout << "-d N: N files are deleted" << endl;
}



int main(int argc, char *argv[]) {
  const int N = 4;
  const int Max = static_cast<int>(pow(('z' + 1) - 'a', N));
  const int NumOfAccess = 2000;

  if (argc == 3) {
    int count = abs(atoi(argv[2])) - 1;
    if (Max < count) {
      count = Max;
    }

    string s;
    s.resize(N);
    vector<string> v;
    v.reserve(count);
    gen_str(0, s, s.size()-1, v, count);
    int sub = 0;
    timeb t1; timer(&t1);

    if (strcmp(argv[1], "-c") == 0) {
      make_file(v);
    } else if (strcmp(argv[1], "-a") == 0) {
      random_access(NumOfAccess, v);
    } else if (strcmp(argv[1], "-d") == 0) {
      remove_file(v);	
    }
    else {
      help();
    }
    sub = timer(&t1);
    cout << sub << " msec" << endl;
  } else {
    help();
  }
  return 0;
}

