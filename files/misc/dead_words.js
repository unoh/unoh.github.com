javascript:(function(){
var start = new Date(); 
var words = new Object();
words={
'３':[
  {'ngword':'３秒ルール', 'desc':'食べ物を落とした時、3秒以内であれば拾って食べても良いというルール'}
],
'鼻':[
  {'ngword':'鼻血ブー', 'desc':'エッチなものを見てしまった時に使う'}
],
'驚':[
  {'ngword':'驚き桃の木サンショの木', 'desc':'驚いた時に使う'}
],
'飲':[
  {'ngword':'飲みにケーション', 'desc':'お酒を飲む事でコミュニケーションを持つ事'}
],
'頭':[
  {'ngword':'頭がピーマン', 'desc':'空っぽであることの例え'},
  {'ngword':'頭がウニになる', 'desc':'パニック状態のこと'},
  {'ngword':'頭がウニ', 'desc':'パニック状態のこと'}
],
'闇':[
  {'ngword':'闇っ子', 'desc':'. 病みっ子  '}
],
'銀':[
  {'ngword':'銀ブラ', 'desc':'銀座をブラブラする'}
],
'連':[
  {'ngword':'連れ込み旅館', 'desc':'女性を連れ込むための場所'}
],
'逆':[
  {'ngword':'逆ナン', 'desc':'女性が男性をナンパすること'}
],
'超':[
  {'ngword':'超ぶりっこ', 'desc':'可愛い子ぶっていた様子'}
],
'話':[
  {'ngword':'話しがピーマン', 'desc':'話しに中身が無い事'}
],
'蛍':[
  {'ngword':'蛍光灯', 'desc':'反応の鈍い人'}
],
'花':[
  {'ngword':'花金', 'desc':'花の金曜日'}
],
'胸':[
  {'ngword':'胸キュン', 'desc':'好きな人を見てときめいている様子'}
],
'背':[
  {'ngword':'背広', 'desc':'スーツ'}
],
'耳':[
  {'ngword':'耳がダンボ', 'desc':'地獄耳'},
  {'ngword':'耳が餃子', 'desc':'都合よく耳が聞こえなくなること'}
],
'翔':[
  {'ngword':'翔んでいる', 'desc':'社会常識に縛られることなく、自分は自分の生き方を通す事'}
],
'絶':[
  {'ngword':'絶対だな', 'desc':'子供がよく言うセリフだった。'}
],
'百':[
  {'ngword':'百貫デブ', 'desc':'凄いデブ'}
],
'男':[
  {'ngword':'男ヤモメ', 'desc':'奥さんを亡くされた寂しい男'}
],
'現':[
  {'ngword':'現代っ子', 'desc':'戦争や戦後の苦しい生活を知らない子供たち'}
],
'猪':[
  {'ngword':'猪口才な', 'desc':'生意気なヤツをバカにする言葉'}
],
'牛':[
  {'ngword':'牛しばく?', 'desc':'焼肉を食べにいくこと'}
],
'熱':[
  {'ngword':'熱気ムンムン', 'desc':'何かに熱が入っていること'}
],
'湘':[
  {'ngword':'湘南ボーイ', 'desc':'湘南育ちの青年'}
],
'流':[
  {'ngword':'流行歌', 'desc':'ヒットソング'}
],
'死':[
  {'ngword':'死刑！', 'desc':'がきデカのこまわり君のキメ台詞'},
  {'ngword':'死語', 'desc':'意味'}
],
'札':[
  {'ngword':'札付きのワル', 'desc':'比べようの無いワル'}
],
'月':[
  {'ngword':'月賦', 'desc':'ローン、クレジット'}
],
'新':[
  {'ngword':'新人類', 'desc':'若者'}
],
'教':[
  {'ngword':'教育ママ', 'desc':'子供に勉強しろとガミガミ言うお母さんのこと'}
],
'指':[
  {'ngword':'指ぱっちん', 'desc':'ポール牧の得意技'},
  {'ngword':'指パッチン', 'desc':'ポール牧の得意技'}
],
'抜':[
  {'ngword':'抜き足差し足忍び足', 'desc':'人に気づかれないように音を立てずに歩く意味'}
],
'愛':[
  {'ngword':'愛人２８号', 'desc':'愛人'}
],
'愚':[
  {'ngword':'愚連隊', 'desc':'グレちゃった人の集団'}
],
'彼':[
  {'ngword':'彼氏いない暦', 'desc':'TV番組「ねるとん紅鯨団」のお決まりフレーズ'}
],
'帳':[
  {'ngword':'帳面', 'desc':'「ノート」のこと'}
],
'小':[
  {'ngword':'小生', 'desc':'自分'}
],
'寒':[
  {'ngword':'寒ぃー、さみー・デイビス・ジュニア（笑）', 'desc':'昔はオリジナルとして使ってましたが。。。'}
],
'宿':[
  {'ngword':'宿六', 'desc':'亭主'}
],
'妖':[
  {'ngword':'妖怪人間', 'desc':'アニメ「妖怪人間ベム」から'}
],
'女':[
  {'ngword':'女学校', 'desc':'袴とおさげとナギナタが三種の神器でした'}
],
'夢':[
  {'ngword':'夢見る夢子ちゃん', 'desc':'夢見がちで現実がわかっていないこと。夢見るシャンソン人形  '},
  {'ngword':'夢見るシャンソン人形', 'desc':'夢見がちで現実がわかっていないこと。夢見る夢子ちゃん  '},
  {'ngword':'夢の島', 'desc':'海に作られたゴミ捨て場。現在は埋め立てられて陸地になっている'},
  {'ngword':'夢の超特急', 'desc':'. 夢見るシャンソン人形  '}
],
'夜':[
  {'ngword':'夜露死苦', 'desc':'「よろしく」暴走族用語。'}
],
'困':[
  {'ngword':'困ったちゃん', 'desc':'マナーを守れない人に使う'}
],
'呼':[
  {'ngword':'呼ばれて飛び出てジャジャジャジャーン', 'desc':'アニメ「ハクション大魔王」で魔王が壺から出てくるときの掛け声'}
],
'君':[
  {'ngword':'君の瞳に乾杯', 'desc':'男が女の子との乾杯の時に使う言葉'}
],
'半':[
  {'ngword':'半ドン', 'desc':'土曜の半日出勤'}
],
'別':[
  {'ngword':'別人２８号', 'desc':'鉄人28号のもじり。あまりにも変貌したことを指す'}
],
'冷':[
  {'ngword':'冷凍みかん', 'desc':'凍らせたみかん。列車の車内販売などで置いていた'}
],
'冬':[
  {'ngword':'冬将軍', 'desc':'よくNHKの天気予報で使われる'}
],
'冗':[
  {'ngword':'冗談はヨシ子ちゃん', 'desc':'冗談めかして、よしこちゃんという女の子の名前にひっかけた言葉'},
  {'ngword':'冗談はよしこさん。', 'desc':'冗談めかして、よしこちゃんという女の子の名前にひっかけた言葉'}
],
'内':[
  {'ngword':'内ゲバ', 'desc':'「内部ゲバルト」の略称。組織における暴力的な粛清行為、もしくは分派闘争による武力衝突をさす。'}
],
'六':[
  {'ngword':'六本木族', 'desc':'六本木を好んでたむろしていたロカビリー族などのこと'}
],
'余':[
  {'ngword':'余裕のよっちゃんいか', 'desc':'簡単であることの例え'},
  {'ngword':'余裕のよっちゃん', 'desc':'簡単であることの例え'}
],
'人':[
  {'ngword':'人生山あり谷ありクロードチアリ', 'desc':'人生色々あるさという、照れ隠しの表現'}
],
'乙':[
  {'ngword':'乙女チック', 'desc':'少女のロマンチック'}
],
'丘':[
  {'ngword':'丘サーファー', 'desc':'サーフィンできるフリをしている人'}
],
'一':[
  {'ngword':'一張羅', 'desc':'たった一枚しかない大事な服'}
],
'ワ':[
  {'ngword':'ワタシニ　デンワ　シテクダサイ　ドーゾ　ヨロシク', 'desc':'. ワタシ ニホンゴ ワッカリマセ〜ン  '},
  {'ngword':'ワイハ', 'desc':'ハワイ'}
],
'ロ':[
  {'ngword':'ロハ', 'desc':'只'}
],
'レ':[
  {'ngword':'レーコー', 'desc':'アイスコーヒーのこと'},
  {'ngword':'レーザーディスク', 'desc':'LD。DVDに取って代わられました。'},
  {'ngword':'レコード店', 'desc':'あっというまにCDの時代になりました'},
  {'ngword':'レスカ', 'desc':'レモンスカッシュの略'}
],
'ル':[
  {'ngword':'ルンルン気分', 'desc':'楽しい様子'}
],
'リ':[
  {'ngword':'リッチマン', 'desc':'お金持ち'}
],
'ラ':[
  {'ngword':'ラッキー、チャチャチャ、ウー!', 'desc':''},
  {'ngword':'ラッタッタ', 'desc':'スクーターのCMで、エンジンをかける時に「ラッタッタ」と言ったのが流行った'},
  {'ngword':'ランデヴー', 'desc':'男女が待ち合わせてデートすること'},
  {'ngword':'ランデブー', 'desc':'男女が待ち合わせてデートすること'},
  {'ngword':'ランニング', 'desc':'タンクトップとの違いは謎'}
],
'ヨ':[
  {'ngword':'ヨロピク', 'desc':'よろしく'}
],
'ユ':[
  {'ngword':'ユーは、', 'desc':'昔のミュージシャン用語'}
],
'ヤ':[
  {'ngword':'ヤング', 'desc':'若者'},
  {'ngword':'ヤンエグ', 'desc':'バブルと共に弾けた'}
],
'モ':[
  {'ngword':'モダン', 'desc':'現代的、今風という意味。大正時代から、昭和初期に流行った言葉'},
  {'ngword':'モーレツ社員', 'desc':'出世のために働いて働いて働きまわる会社員'},
  {'ngword':'モーテル', 'desc':'ファッションホテル'}
],
'マ':[
  {'ngword':'マッハ', 'desc':'急ぐこと'},
  {'ngword':'ママゴン', 'desc':'子供に勉強しろとガミガミ言うお母さんのこと'},
  {'ngword':'マルビ', 'desc':'貧乏'},
  {'ngword':'マル金', 'desc':'お金持ち'}
],
'ボ':[
  {'ngword':'ボイン', 'desc':'巨乳'}
],
'ホ':[
  {'ngword':'ホワイトキック', 'desc':'白ける'},
  {'ngword':'ホの字', 'desc':'惚れる'},
  {'ngword':'ホネ皮すじえもん', 'desc':'骨と皮しかないガリガリに痩せた男'}
],
'ヘ':[
  {'ngword':'ヘベレケ', 'desc':'呂律が回らず、喋る言葉は意味不明で、まっすぐ歩けないほど酔っ払った状態'}
],
'プ':[
  {'ngword':'プンプン', 'desc':'怒っている様子'}
],
'ブ':[
  {'ngword':'ブクロ', 'desc':'池袋のこと'},
  {'ngword':'ブルゾン', 'desc':'まぁ、生きてもいますが・・・。'}
],
'フ':[
  {'ngword':'フィバる', 'desc':'熱狂する様子'},
  {'ngword':'フィーバー', 'desc':'熱狂する様子'}
],
'ピ':[
  {'ngword':'ピッタシ', 'desc':'ピッタリ'},
  {'ngword':'ピチピチ', 'desc':'おじさんやおばさんが、若者達の身体にあるはちきれそうな若さを羨む意味で使う'},
  {'ngword':'ピーカン', 'desc':'空が晴れ渡った晴天の事'}
],
'ビ':[
  {'ngword':'ビフテキ', 'desc':'ビーフステーキ'}
],
'パ':[
  {'ngword':'パンツまるみえ', 'desc':'「パン」と手を叩き、「つー」はピースをして、「まる」は両手で望遠鏡を作り目の所へ、「みえ」で手をかざして遠くを見る格好をする'},
  {'ngword':'パンスト', 'desc':'パンティストッキング'},
  {'ngword':'パーマ屋', 'desc':'美容院、理容院'},
  {'ngword':'パーマネントあてる', 'desc':'「あてる」がミソ'},
  {'ngword':'パープリン', 'desc':'頭がパーで中身がないこと'}
],
'バ':[
  {'ngword':'バタンキュー', 'desc':'疲れ切った状態のこと'},
  {'ngword':'バリバリ', 'desc':'やる気になっている状態'},
  {'ngword':'バッチシ', 'desc':'バッチリ'},
  {'ngword':'バカウケ', 'desc':'バカに受ける'},
  {'ngword':'バンド', 'desc':'ベルトのこと'},
  {'ngword':'バッチグー', 'desc':'物事がうまくいった時に使う'},
  {'ngword':'バイナラ', 'desc':'バイバイとさよならの合成'}
],
'ハ':[
  {'ngword':'ハッスル', 'desc':'張り切る事'},
  {'ngword':'ハンケチ', 'desc':'ハンカチ'},
  {'ngword':'ハイカラ', 'desc':'好奇心旺盛で、新し物好きという意味'}
],
'ノ':[
  {'ngword':'ノークラ', 'desc':'オートマのことです。。。'}
],
'ネ':[
  {'ngword':'ネアカ', 'desc':'根が明るい'},
  {'ngword':'ネクラ', 'desc':'根が暗い'}
],
'ニ':[
  {'ngword':'ニキビは青春のシンボル', 'desc':'キャー！！！'},
  {'ngword':'ニヒル', 'desc':'ニヒルなジゴロ、とか？'},
  {'ngword':'ニャンニャンする', 'desc':'エッチする'}
],
'ナ':[
  {'ngword':'ナイコン族', 'desc':'一般家庭にPCが普及する以前、PCを持っていない人たちのことをこう呼んだ'},
  {'ngword':'ナイス・ミドル', 'desc':'シルバー・グレーのナイス・ミドル？ '},
  {'ngword':'ナウい', 'desc':'今風'},
  {'ngword':'ナオン', 'desc':'女の子'},
  {'ngword':'ナハ・ナハ！', 'desc':'せんだみつおさんのギャグ'}
],
'ド':[
  {'ngword':'ドンマイ、ドンマイ', 'desc':'ドンマーイ！とも'},
  {'ngword':'ドロンさせていただきます', 'desc':'お先に失礼させていただきます'},
  {'ngword':'ドツボ', 'desc':'最悪'},
  {'ngword':'ドッキンコ！', 'desc':'「胸がドッキンコ！」もあり'}
],
'ト':[
  {'ngword':'トレンディ', 'desc':'流行'},
  {'ngword':'トレンディー', 'desc':'流行'}
],
'デ':[
  {'ngword':'デカパイ', 'desc':'巨乳'},
  {'ngword':'デニる', 'desc':'デニーズに行くこと'}
],
'テ':[
  {'ngword':'テクシー', 'desc':'テクテクと歩く事を、タクシーに文字った言葉'}
],
'ツ':[
  {'ngword':'ツッパリ', 'desc':'70年代の不良'}
],
'チ':[
  {'ngword':'チョベリバ', 'desc':'超very badの略'},
  {'ngword':'チョベリグ', 'desc':'超 very goodの略'},
  {'ngword':'チャーミング', 'desc':'魅力的'},
  {'ngword':'チョッキ', 'desc':'ベストのこと'},
  {'ngword':'チョーMM', 'desc':'「超マジむかつく」の意'},
  {'ngword':'チャオ', 'desc':'「やあ」とかの挨拶'},
  {'ngword':'チャンネルを回す', 'desc':'昔のテレビのチャンネルは円形のツマミだった'},
  {'ngword':'チャック', 'desc':'ファスナー'}
],
'ダ':[
  {'ngword':'ダッコちゃん', 'desc':'腕にとりつけるビニール製のオモチャ。転じておんぶにだっこな人。'},
  {'ngword':'ダッシュ', 'desc':'大急ぎ'},
  {'ngword':'ダンパ', 'desc':'ダンスパーティーの略語'},
  {'ngword':'ダベる', 'desc':'雑談する'},
  {'ngword':'ダンディー', 'desc':'服装や人との対応など、万事に置いてスマートな男'},
  {'ngword':'ダンチ', 'desc':'段違いに　の意'}
],
'タ':[
  {'ngword':'タカビー', 'desc':'高飛車な態度'},
  {'ngword':'タッパ', 'desc':'背'},
  {'ngword':'タンマ', 'desc':'待って欲しい時に使う'}
],
'ゼ':[
  {'ngword':'ゼロックスして', 'desc':'今で言う「コピー」ですね。'},
  {'ngword':'ゼロックスする', 'desc':'今で言う「コピー」ですね。'}
],
'ズ':[
  {'ngword':'ズック', 'desc':'スニーカー'},
  {'ngword':'ズラかる', 'desc':'逃げる'}
],
'ス':[
  {'ngword':'スーパーカー', 'desc':'フェラーリ、ランボルギーニなど'},
  {'ngword':'スラックス', 'desc':'ズボン・パンツ'}
],
'ジ':[
  {'ngword':'ジッパー', 'desc':'スボンのファスナー'},
  {'ngword':'ジョナる', 'desc':'ジョナサンに行くこと'},
  {'ngword':'ジモティー', 'desc':'地元の人'},
  {'ngword':'ジュリ扇', 'desc':'伝説のディスコ：ジュリアナで流行った扇子'},
  {'ngword':'ジャムる', 'desc':'「今度ジャムろうぜ！」ってとてもハズカシイ。。。'}
],
'シ':[
  {'ngword':'シティーボーイ', 'desc':'都会の似合うカッコいい男性'},
  {'ngword':'シティギャル', 'desc':'都会の似合うカッコいい女性'},
  {'ngword':'シモシモ？', 'desc':'モシモシ'},
  {'ngword':'シラケ鳥', 'desc':'しらけた'},
  {'ngword':'シャン', 'desc':'美人'}
],
'サ':[
  {'ngword':'サバラ！', 'desc':'さらばの意'}
],
'ゴ':[
  {'ngword':'ゴマスリ社員', 'desc':'出世のために上司の顔色ばかり窺がっている社員'},
  {'ngword':'ゴキゲン', 'desc':'昔のミュージシャンは普通に使う'}
],
'コ':[
  {'ngword':'コギャル', 'desc':'中高生くらいの若いギャル'},
  {'ngword':'コール天', 'desc':'コーデュロイですかね'}
],
'ゲ':[
  {'ngword':'ゲロゲロ', 'desc':'最悪'}
],
'グ':[
  {'ngword':'グラッチェ、グラッチェ！', 'desc':'美味しいときに使う'},
  {'ngword':'グンバツ', 'desc':'抜群の意'},
  {'ngword':'グワシ', 'desc':'まことちゃん'},
  {'ngword':'グラサン', 'desc':'サングラス'},
  {'ngword':'グラッチェグラッチェ', 'desc':'美味しいときに使う'},
  {'ngword':'グーよ！グー！', 'desc':'GOOD、OKという意味'},
  {'ngword':'グロッキー', 'desc':'疲れてぐったり'},
  {'ngword':'グー', 'desc':'GOOD、OKという意味'},
  {'ngword':'グラマー', 'desc':'セクシーな女性'}
],
'ク':[
  {'ngword':'クリソ', 'desc':'そっくり'},
  {'ngword':'クリソツ', 'desc':'そっくり'}
],
'ギ':[
  {'ngword':'ギャル', 'desc':'若い女性'},
  {'ngword':'ギャフン', 'desc':'まいった様子'}
],
'キ':[
  {'ngword':'キミョーキテレツ', 'desc':'マジでこないだ使っている人がいたんですぅ'}
],
'ガ':[
  {'ngword':'ガビ〜ン', 'desc':'失敗してショックな時に使う'},
  {'ngword':'ガビィーン！', 'desc':'失敗してショックな時に使う'},
  {'ngword':'ガンバ', 'desc':'頑張れ'},
  {'ngword':'ガチョーン！', 'desc':'ギャグ。谷敬が使う'}
],
'カ':[
  {'ngword':'カウチポテト', 'desc':'ポテトチップスを食べながらテレビ観賞すること'}
],
'オ':[
  {'ngword':'オバタリアン', 'desc':'図々しいおばさん'},
  {'ngword':'オッケー牧場！', 'desc':'ガッツはオッケー'},
  {'ngword':'オタッキー', 'desc':'おたく'},
  {'ngword':'オキニ', 'desc':'お気に入り'},
  {'ngword':'オカチメンコ', 'desc':'ブス'}
],
'エ':[
  {'ngword':'エアチェック', 'desc':'ラジオから音源を録音すること。昔は今ほどレコードが豊富でなかったので、よく録音した。'}
],
'ウ':[
  {'ngword':'ウサギ小屋', 'desc':'日本家屋の狭さを称して'},
  {'ngword':'ウーパールーパー', 'desc':'肌色の両生類'}
],
'イ':[
  {'ngword':'イカス', 'desc':'イケている'},
  {'ngword':'イカす！', 'desc':'昔「イカ天」ってありましたねー。'},
  {'ngword':'イエスの箱舟', 'desc':''},
  {'ngword':'イカレポンチ', 'desc':'イカレてる'},
  {'ngword':'イケイケ', 'desc':'バブル期に生息していたエネルギッシュな女の子'},
  {'ngword':'イケメン', 'desc':'美男子'},
  {'ngword':'イチコロ', 'desc':'殺虫剤ＣＭで流行し、色っぽい女性がセクシーなポーズをとる時に言う'},
  {'ngword':'イマい', 'desc':'今風'},
  {'ngword':'インド人もびっくり', 'desc':'びっくりした時に使う'},
  {'ngword':'イェーイ', 'desc':'盛り上げる時に言う掛け声'}
],
'ア':[
  {'ngword':'アノラック', 'desc':'防寒着'},
  {'ngword':'アングラ', 'desc':'アンダーグランドの略'},
  {'ngword':'アムラー', 'desc':'安室奈美恵のファッションを真似する人たち'},
  {'ngword':'アッチョンブリケ！', 'desc':'びっくりした時に使う'},
  {'ngword':'アンノン族', 'desc':'「anan」「nonno」の影響を受けたライフスタイルを送る女の子たちのこと'},
  {'ngword':'アベック', 'desc':'男女の二人連れ。カップル'},
  {'ngword':'アンチャン', 'desc':''},
  {'ngword':'アッシー', 'desc':''},
  {'ngword':'アウトオブ眼中', 'desc':''},
  {'ngword':'アウト・オブ・眼中', 'desc':'眼中に無い'},
  {'ngword':'アイム・ソーリー・ひげそーりー', 'desc':'謝るときに使う'},
  {'ngword':'アイミティー', 'desc':'「レイコー」って大阪ではまだいきてるのかな？'},
  {'ngword':'アイタタ', 'desc':'図星を突かれたときなど'},
  {'ngword':'アイアムソーリーヒゲソーリー', 'desc':''},
  {'ngword':'アイアイサー', 'desc':'了解'}
],
'ん':[
  {'ngword':'んちゃ', 'desc':'「こんにちは」'},
  {'ngword':'ん〜どうでしょう?', 'desc':'某ミスターの口癖'}
],
'わ':[
  {'ngword':'わんぱくでもいい、たくましく育ってほしい', 'desc':'○大ハム'},
  {'ngword':'わんぱく', 'desc':'元気なこと'}
],
'よ':[
  {'ngword':'よろしこ', 'desc':''},
  {'ngword':'よゆーで', 'desc':''}
],
'ゆ':[
  {'ngword':'ゆうだけ番長', 'desc':'夕焼け番長をもじった言葉'},
  {'ngword':'ゆるしてチョンマゲ', 'desc':'愛嬌で許してもらう時に使う'}
],
'や':[
  {'ngword':'やるっきゃない', 'desc':'やるしかない'},
  {'ngword':'やってみそ', 'desc':'やったらどうですか'},
  {'ngword':'やったぜベイビー', 'desc':'かなり嬉しいときに使う'},
  {'ngword':'やっこさん', 'desc':'年下の人を呼ぶ時の、親しみを込めた表現'}
],
'も':[
  {'ngword':'もったいないオバケがでる！', 'desc':'デンコちゃんはどうだろう？'}
],
'め':[
  {'ngword':'めんご', 'desc':'ごめん'},
  {'ngword':'めちゃんこ', 'desc':'とても'},
  {'ngword':'めだとう精神', 'desc':'目立とうとする精神'}
],
'み':[
  {'ngword':'みっちゃんみちみち', 'desc':'幼稚園児とか小学生が、光子とか道子とかいう女の子をからかうのに歌った歌。'}
],
'ぼ':[
  {'ngword':'ぼんくら', 'desc':'物の見通しがきかない人'}
],
'ほ':[
  {'ngword':'ほとんどビョーキ', 'desc':'常識を外している'}
],
'へ':[
  {'ngword':'へなちょこ', 'desc':'変な'},
  {'ngword':'へっぽこ', 'desc':'ダメ'}
],
'ぷ':[
  {'ngword':'ぷっつん', 'desc':'アタマの中のネジが抜けること'}
],
'ぴ':[
  {'ngword':'ぴったしカンカン', 'desc':'ピッタリ合った時に使う'}
],
'ひ':[
  {'ngword':'ひゅーひゅー', 'desc':'カップルを冷やかす時などに使う'}
],
'は':[
  {'ngword':'はい、おつり２００万円！（笑）', 'desc':'駄菓子屋等の定番'},
  {'ngword':'はげちゃびん', 'desc':'頭髪が薄い人'},
  {'ngword':'は〜い、口チャック！', 'desc':'小学校の先生が言います'}
],
'の':[
  {'ngword':'のっぴきならない', 'desc':'退くに退けない、どうしてもやらなくてはならない事'}
],
'に':[
  {'ngword':'にゃんにゃん', 'desc':'エッチする'}
],
'な':[
  {'ngword':'なんちゃって', 'desc':'その場しのぎ'},
  {'ngword':'なんじゃらホイ', 'desc':'なんですか？'},
  {'ngword':'なるほど！・・・ザ・ワールド(^^;)', 'desc':'TV番組より'}
],
'ど':[
  {'ngword':'どんぴしゃ', 'desc':'ピッタリ'},
  {'ngword':'どえーす', 'desc':'・・・です'}
],
'と':[
  {'ngword':'とさかにくる', 'desc':'頭にくる'},
  {'ngword':'とっくりセーター', 'desc':'タートルネック'},
  {'ngword':'とほほ', 'desc':'悲しいときに使う'},
  {'ngword':'とんでもハップン', 'desc':'思いがけない時使う'},
  {'ngword':'とっくり', 'desc':'タートルネック'}
],
'で':[
  {'ngword':'でR', 'desc':'〜でア〜ル'}
],
'ち':[
  {'ngword':'ちちんぷいぷい', 'desc':'呪文'},
  {'ngword':'ちょちょいのちょい', 'desc':'簡単にやってしまうこと'},
  {'ngword':'ちり紙', 'desc':'ティッシュ'}
],
'だ':[
  {'ngword':'だべる', 'desc':'雑談する'}
],
'ぞ':[
  {'ngword':'ぞっこん', 'desc':'とてもスキなこと'}
],
'そ':[
  {'ngword':'そーだよそーだよソースだよ', 'desc':'インスタントソース焼きそばのCMで使われた言葉'},
  {'ngword':'そんなバナナ', 'desc':'そんなバカな'}
],
'す':[
  {'ngword':'すかす', 'desc':'気取っているという意味'},
  {'ngword':'すんまそんm(_ _)m', 'desc':'ごめんなさい'}
],
'し':[
  {'ngword':'しこたま', 'desc':'たくさん'},
  {'ngword':'してみそ。', 'desc':'（例）やってみそ。'},
  {'ngword':'してちょんまげ。', 'desc':'（例）見てちょんまげ。'}
],
'こ':[
  {'ngword':'こうもり', 'desc':'傘のこと'}
],
'く':[
  {'ngword':'くわばらくわばら', 'desc':'災難にあわない、おまじない'}
],
'が':[
  {'ngword':'がちょーん', 'desc':'ギャグ。谷敬が使う'},
  {'ngword':'がってん承知のすけ！', 'desc':'何も心配するな'},
  {'ngword':'がってんの承知の助', 'desc':'何も心配するな'}
],
'か':[
  {'ngword':'かっぺ', 'desc':'田舎者'},
  {'ngword':'かわいこちゃん', 'desc':'かわいい女の子'}
],
'お':[
  {'ngword':'おかんむり', 'desc':'怒っている様子'},
  {'ngword':'おセンチ', 'desc':'センチメンタル'},
  {'ngword':'おちゃのこさいさい', 'desc':'簡単'},
  {'ngword':'おネム', 'desc':'「おネムさん」とも'},
  {'ngword':'おやじギャル', 'desc':'おやじっぽいギャル'},
  {'ngword':'おじゃま虫', 'desc':'カップル二人が仲良く喋っていて良い雰囲気の時に割り込むとき使う'},
  {'ngword':'おニュー', 'desc':'新品'},
  {'ngword':'おひさー！', 'desc':'お久しぶり'},
  {'ngword':'おシャカになる', 'desc':'全てがパーになる'},
  {'ngword':'おととい来やがれ', 'desc':'文句'},
  {'ngword':'おヒサ〜！', 'desc':'お久しぶり'},
  {'ngword':'おっはー！', 'desc':'死語化ホヤホヤ。'},
  {'ngword':'おばん', 'desc':'おばさんっぽい'},
  {'ngword':'おっとびっくり玉手箱', 'desc':'驚いた時に使う'},
  {'ngword':'おっと、このマグロ生きてるぞ！', 'desc':'箸から落とした時に使う（えびでも可）'}
],
'え':[
  {'ngword':'えもんかけ', 'desc':'ハンガー'}
],
'う':[
  {'ngword':'うーん、寝てみたい。', 'desc':'CMから'},
  {'ngword':'うれピー', 'desc':'うれしい'},
  {'ngword':'うーん、マンダム', 'desc':'CMから'},
  {'ngword':'うらやまピー！', 'desc':'「うれピー」もあり。'},
  {'ngword':'うっそぴょ〜ん', 'desc':'ウソだよ'},
  {'ngword':'うそピョーン', 'desc':'ウソだよ'},
  {'ngword':'うそぴょーん', 'desc':'ウソだよ'}
],
'い':[
  {'ngword':'いいとも！', 'desc':'TV番組「笑っていいとも」の掛け声'},
  {'ngword':'いただきマンモス', 'desc':'のりぴー語'},
  {'ngword':'いの一番', 'desc':'真っ先に'},
  {'ngword':'いつもより多めに回しておりまーす！！', 'desc':'お約束の追加サービス'}
],
'あ':[
  {'ngword':'ああいえば上祐', 'desc':'永遠に続くかというくらいしぶとく苦しい言い訳'},
  {'ngword':'あいすみません', 'desc':'とりあえず謝っておきましょう'},
  {'ngword':'あたり前田のクラッカー', 'desc':'当たり前'},
  {'ngword':'あっちょんぷりけ', 'desc':'びっくりした時に使う'},
  {'ngword':'あっと驚くタメゴロー！', 'desc':'びっくりした時に使う'},
  {'ngword':'あぶらギッシュ', 'desc':'皮膚が油っぽい・くどい'},
  {'ngword':'あんちくしょう', 'desc':''},
  {'ngword':'あたりまえだのクラッカー', 'desc':'当たり前'},
  {'ngword':'あっと驚くためごろう', 'desc':'びっくりした時に使う'},
  {'ngword':'あんたは偉いっ!', 'desc':''},
  {'ngword':'あたりきしゃりきのこんこんちき', 'desc':'当たり前'},
  {'ngword':'あたりきしゃりき', 'desc':'当たり前'},
  {'ngword':'あたぼうよ！', 'desc':'当たり前'},
  {'ngword':'あたボウ', 'desc':'当たり前'},
  {'ngword':'あたぼう', 'desc':'当たり前'},
  {'ngword':'あそばせ', 'desc':'「御免あそばせ」など、高圧的な言い方'},
  {'ngword':'あじゃぱー', 'desc':'あれまー'},
  {'ngword':'あけおめ', 'desc':'あけましておめでとうございます'}
],
'「':[
  {'ngword':'「本気」と書いて「マジ！」', 'desc':'前にナイナイの岡村が使ってました。'}
],
'Y':[
  {'ngword':'Y2K', 'desc':'2000年'}
],
'V':[
  {'ngword':'V.S.O.P.', 'desc':'ベリー・スペシャル・ワンパターン'}
],
'M':[
  {'ngword':'MK５', 'desc':'マジ・キレ５秒前'}
],
'J':[
  {'ngword':'J-ROCK', 'desc':'J-POPと同時に誕生したが、一般化しなかった'}
],
'E':[
  {'ngword':'E電', 'desc':'すごーく地味な死語。'}
],
'A':[
  {'ngword':'ABC', 'desc':'恋愛の進捗状況をたとえたもの'}
],
'8':[
  {'ngword':'893', 'desc':'「やくざ」と読ませる'}
],
'4':[
  {'ngword':'4649', 'desc':'「ヨロシク」の意'}
],
'3':[
  {'ngword':'37564', 'desc':'「ミナゴロシ」と読む'}
],
'2':[
  {'ngword':'24時間戦えますか', 'desc':'栄養ドリンクのCMから'}
]
}
ngnum=0;
mbody=document.body.innerHTML;
nbody="";

for (i = 0; i < mbody.length; i++){

    if(mbody.charAt(i)=="<"){
        ii=mbody.indexOf(">",i);
        nbody+=mbody.substring(i,ii+1);
        i=ii;
        continue;
    }
    f=0;
    if(words[mbody.charAt(i)] != undefined){
    
        j=0;
        while (words[mbody.charAt(i)][j] != undefined){
//alert(mbody.substring(i,i+words[mbody.charAt(i)][j]['ngword'].length));
            if(words[mbody.charAt(i)][j].ngword == mbody.substring(i,i+words[mbody.charAt(i)][j]['ngword'].length)){
                nbody+="<b style=\"background:#ff2222;color:#CCCCFF\" title=\"解説：";
                if(words[mbody.charAt(i)][j].desc == ""){words[mbody.charAt(i)][j].desc="なし"};
                nbody+=words[mbody.charAt(i)][j].desc+"\">"+words[mbody.charAt(i)][j].ngword+"</b>";
                i = i + words[mbody.charAt(i)][j]['ngword'].length-1;
                ngnum ++;
                f=1;
                break;
            }
            j++;
        }
    }
    if(f==0){nbody+=mbody.charAt(i)}
}
document.body.innerHTML=nbody
eval();

now = new Date(); 

T = parseInt((now.getTime() - start.getTime())); 
hour = Math.floor(T/(60*60*1000));
T = T-(hour*60*60*1000);
min = Math.floor(T/(60*1000));
T = T-(min*60*1000);
sec = Math.floor(T/1000); 
msec = T%1000; 

if(hour < 10) { hour = "0" + hour; } 
if(min < 10) { min = "0" + min; } 
if(sec < 10) { sec = "0" + sec; } 

timer1 ="";
//var timer1 = hour + ':' + min + ':' + sec + ':' + msec;

if(ngnum){
    alert("死語の検索が終了しました。\n"+ngnum+"件の死語候補があります。ご確認ください。" + timer1);
}else{
    alert("死語の検索が終了しました。前時代的表現は検出されませんでした。" + timer1);
}


;})

();
