javascript:(function(){
var start = new Date(); 
var words = new Object();
words={
'Ｏ':[
  {'ngword':'ＯＬ', 'okword':'女子社員 女子事務員 会社勤めの女性', 'desc':'乱用は避ける'}
],
'黒':[
  {'ngword':'黒んぼ', 'okword':'黒人', 'desc':''},
  {'ngword':'黒人', 'okword':'', 'desc':'不必要に使わない。黒人兵→米兵。人種の分類では単純に肌の色だけから区別するものではなく、例えばインド人は分類上は白人（コーカソイド）'},
  {'ngword':'黒坊', 'okword':'黒人', 'desc':''}
],
'鮮':[
  {'ngword':'鮮人', 'okword':'朝鮮人', 'desc':'使わないこと'}
],
'魚':[
  {'ngword':'魚屋', 'okword':'鮮魚商', 'desc':'職業名'}
],
'魔':[
  {'ngword':'魔女っ子', 'okword':'魔法少女', 'desc':'「悪魔のような子供」の意'}
],
'馬':[
  {'ngword':'馬喰', 'okword':'家畜仲買人', 'desc':''},
  {'ngword':'馬鹿チョンカメラ', 'okword':'オートマチックカメラ 全自動カメラ', 'desc':'「馬鹿でもチョンと押せば写せるカメラ」が説としては有力か'},
  {'ngword':'馬鹿でもチョンでも', 'okword':'', 'desc':'なるべく使わない。チョンは朝鮮人に対する蔑称'},
  {'ngword':'馬丁', 'okword':'馬手 厩務員', 'desc':'競馬法では馬丁のまま、明治からの賎業としての「馬丁」が連想されるため問題となる'}
],
'首':[
  {'ngword':'首切り', 'okword':'解雇 人員整理', 'desc':'中国語では「イカを炒める」と言う。無職者が腹を空かせて布団にくるまるさまが、加熱して丸まったイカに見えることから'}
],
'養':[
  {'ngword':'養老院', 'okword':'老人ホーム 老人養護施設', 'desc':''}
],
'飯':[
  {'ngword':'飯場', 'okword':'作業員宿舎', 'desc':''}
],
'非':[
  {'ngword':'非人', 'okword':'', 'desc':'使わない。江戸期、えたとともに賤民視された人々の呼称'}
],
'青':[
  {'ngword':'青姦', 'okword':'野合', 'desc':'屋外で性交すること'}
],
'露':[
  {'ngword':'露助', 'okword':'ロシア人', 'desc':''}
],
'雲':[
  {'ngword':'雲助', 'okword':'運転手', 'desc':'タクシー運転手の蔑称。特に、たちの悪い運転手の事をさす場合がある。江戸時代の籠かきへの悪口から発生。'}
],
'雑':[
  {'ngword':'雑役夫', 'okword':'用務員 校務員', 'desc':''}
],
'隠':[
  {'ngword':'隠坊', 'okword':'火葬場従業員', 'desc':'斎場の火葬作業員に対する蔑称。かつては死者が身に着けている装飾品や金歯など焼け残った物を奪うと信じられていた。'}
],
'鉱':[
  {'ngword':'鉱夫', 'okword':'鉱山労働者 鉱員', 'desc':''}
],
'釣':[
  {'ngword':'釣り書き', 'okword':'自己紹介書', 'desc':''}
],
'醜':[
  {'ngword':'醜男', 'okword':'器量の悪い男', 'desc':''}
],
'郵':[
  {'ngword':'郵便屋', 'okword':'郵便配達員 郵便屋さん', 'desc':''},
  {'ngword':'郵便夫', 'okword':'郵便集配人 郵便配達人', 'desc':''}
],
'部':[
  {'ngword':'部落', 'okword':'集落 地区', 'desc':''}
],
'邪':[
  {'ngword':'邪宗', 'okword':'', 'desc':'異なる宗教の人に対して侮蔑的に使う。'},
  {'ngword':'邪教', 'okword':'', 'desc':'異なる宗教の人に対して侮蔑的に使う。'}
],
'過':[
  {'ngword':'過去帳', 'okword':'檀家の記録', 'desc':''}
],
'運':[
  {'ngword':'運ちゃん', 'okword':'運転手', 'desc':''}
],
'連':[
  {'ngword':'連れ子', 'okword':'お子さん', 'desc':'再婚に際して前夫・前妻の子供を指す'}
],
'近':[
  {'ngword':'近目', 'okword':'近視', 'desc':''}
],
'農':[
  {'ngword':'農夫', 'okword':'農民 農業 農家', 'desc':''}
],
'身':[
  {'ngword':'身元調査', 'okword':'', 'desc':'なるべく使わない'},
  {'ngword':'身分', 'okword':'', 'desc':'使用方法により注意'}
],
'躄':[
  {'ngword':'躄', 'okword':'足の悪い人 足の不自由な人', 'desc':''}
],
'踏':[
  {'ngword':'踏切番', 'okword':'踏切警手 踏切保安係', 'desc':'保安係を必要とする踏切は第1種乙・第2種があるが、第2種は国内に既に無く第1種乙も数少ない'}
],
'跛':[
  {'ngword':'跛', 'okword':'足の悪い人 足の不自由な人', 'desc':''}
],
'足':[
  {'ngword':'足を洗う', 'okword':'更生する', 'desc':'洗足池（東京）は「日蓮上人が足を洗った」池であり、慣用句として「足を洗う」意はない'},
  {'ngword':'足切り', 'okword':'予備選抜 二段階選抜', 'desc':'大学入試に関して用いられる「足切り」という表現は、語感が強すぎるので、アナウンス、表記ともになるべく「予備選抜」「二段階選抜」などと言い換えることが望ましい'}
],
'越':[
  {'ngword':'越後の米つき', 'okword':'', 'desc':'なるべく使わない'}
],
'貧':[
  {'ngword':'貧農', 'okword':'貧しい農民', 'desc':''}
],
'親':[
  {'ngword':'親方', 'okword':'チーフ 班長', 'desc':'土木関係の場合'}
],
'裏':[
  {'ngword':'裏日本', 'okword':'日本海側', 'desc':''}
],
'表':[
  {'ngword':'表日本', 'okword':'太平洋側', 'desc':''}
],
'血':[
  {'ngword':'血筋', 'okword':'', 'desc':'結婚、就職などの文脈では要注意'},
  {'ngword':'血統', 'okword':'', 'desc':'結婚、就職などの文脈では注意する'}
],
'蜘':[
  {'ngword':'蜘蛛助', 'okword':'運転手', 'desc':'タクシー運転手の蔑称。特に、たちの悪い運転手の事をさす場合がある。江戸時代の籠かきへの悪口から発生。'}
],
'蛸':[
  {'ngword':'蛸部屋', 'okword':'窮屈な作業員宿舎', 'desc':''}
],
'蛙':[
  {'ngword':'蛙の子は蛙', 'okword':'凡人の子は凡人だ 子は親に似る', 'desc':''}
],
'藪':[
  {'ngword':'藪睨み', 'okword':'斜視 見当違い', 'desc':''},
  {'ngword':'藪医者', 'okword':'', 'desc':'診療能力の劣った下手な医者の意'}
],
'蒙':[
  {'ngword':'蒙古症', 'okword':'ダウン症', 'desc':''}
],
'落':[
  {'ngword':'落とし前', 'okword':'金銭の絡んだ決着', 'desc':'露店などで値を適当なところまで落として客と折り合いをつける香具師(やし)仲間の隠語から'},
  {'ngword':'落ちこぼれ', 'okword':'授業についていけない子供 学業・成績不振の子供', 'desc':'やむをえない場合は「いわゆる落ちこぼれ」と表現'},
  {'ngword':'落人部落', 'okword':'落人村', 'desc':'戦等により逃亡した者が住み着いた村の意か'}
],
'苦':[
  {'ngword':'苦力', 'okword':'労働者', 'desc':'中国語から。特に中国・インド・アフリカ等植民地での下層肉体労働者の意'}
],
'芸':[
  {'ngword':'芸人', 'okword':'芸能人', 'desc':'現代で一般的なのは「お笑い芸人」の略としてか'}
],
'色':[
  {'ngword':'色盲', 'okword':'色覚異常', 'desc':''}
],
'興':[
  {'ngword':'興信所', 'okword':'民間調査機関 調査会社', 'desc':'結婚、就職などの文脈では言い換え語の使用も要注意'}
],
'自':[
  {'ngword':'自閉症児', 'okword':'自閉症の子供', 'desc':''}
],
'脳':[
  {'ngword':'脳膜炎', 'okword':'精神障害者', 'desc':''}
],
'育':[
  {'ngword':'育ちより氏', 'okword':'', 'desc':'使わない。「氏より育ち」も要注意'}
],
'股':[
  {'ngword':'股にかける', 'okword':'', 'desc':'なるべく使わない'},
  {'ngword':'股に掛ける', 'okword':'', 'desc':'なるべく使わない'}
],
'聾':[
  {'ngword':'聾桟敷', 'okword':'きこえないところ', 'desc':''},
  {'ngword':'聾', 'okword':'耳の不自由な人', 'desc':''}
],
'職':[
  {'ngword':'職工', 'okword':'工員 工場従業員', 'desc':''}
],
'老':[
  {'ngword':'老婆', 'okword':'老婦人 老女', 'desc':'老女は非常に嫌がられる'}
],
'群':[
  {'ngword':'群盲象をなでる', 'okword':'', 'desc':'特別な場合以外は使わない方がよい。凡人は大事業や大人物の一部しか見えず、全体像を見渡せない意'}
],
'線':[
  {'ngword':'線路工夫', 'okword':'保線員 保線区員', 'desc':''}
],
'給':[
  {'ngword':'給仕', 'okword':'ボーイ 接客係', 'desc':'女工等と同様、時代背景を明確にして使われることがある'}
],
'紅':[
  {'ngword':'紅毛人', 'okword':'白人', 'desc':''}
],
'精':[
  {'ngword':'精薄', 'okword':'精神薄弱児 ', 'desc':'「精薄」は使わない。「精神薄弱児」には侮蔑の意味はないので使ってもよい'},
  {'ngword':'精神分裂病', 'okword':'統合失調症参照。', 'desc':''},
  {'ngword':'精神異常', 'okword':'精神障害', 'desc':''}
],
'第':[
  {'ngword':'第三国', 'okword':'', 'desc':'中国・朝鮮の意味のときは不可'}
],
'穢':[
  {'ngword':'穢多', 'okword':'', 'desc':'使わない。特に江戸期、非人とともに被差別階級とされた。ちなみにスペインの反政府組織ETA（バスク祖国と自由）は“えた”と発音する'}
],
'移':[
  {'ngword':'移民', 'okword':'海外移住者', 'desc':''}
],
'確':[
  {'ngword':'確信犯', 'okword':'故意犯', 'desc':''}
],
'知':[
  {'ngword':'知恵遅れ', 'okword':'知的障害者', 'desc':''}
],
'盲':[
  {'ngword':'盲目', 'okword':'分別に欠ける 理性がない', 'desc':'比喩的表現の場合'},
  {'ngword':'盲滅法', 'okword':'', 'desc':'むやみに事を行うさま'},
  {'ngword':'盲判を押す', 'okword':'ろくに見ないで判を押す', 'desc':''},
  {'ngword':'盲人', 'okword':'目の不自由な人 視覚障害者', 'desc':'「盲人用信号」の表記は地域によっては残っている'},
  {'ngword':'盲蛇に怖じず', 'okword':'', 'desc':'無知な者が無知である故に無鉄砲な振る舞いをする意'},
  {'ngword':'盲縞', 'okword':'', 'desc':'木綿平織物の一種'},
  {'ngword':'盲愛する', 'okword':'むやみに可愛がる', 'desc':''},
  {'ngword':'盲', 'okword':'視力障害者 目の不自由な人', 'desc':''}
],
'皮':[
  {'ngword':'皮被り', 'okword':'包茎', 'desc':'仮性包茎は日本人男性の6割とも9割とも言われている'},
  {'ngword':'皮切り', 'okword':'手始め', 'desc':'最初に据える灸は皮膚を切るような痛みを感じることから。包茎手術の意はないが卑俗に感じる場合もある'}
],
'百':[
  {'ngword':'百姓', 'okword':'農民 農家の人 お百姓さん', 'desc':'NHKで農業従事者が自分のことを「百姓」と言い放送事故になったとも'}
],
'白':[
  {'ngword':'白痴', 'okword':'精神障害者', 'desc':''}
],
'発':[
  {'ngword':'発狂する', 'okword':'気が狂う', 'desc':''}
],
'癩':[
  {'ngword':'癩病', 'okword':'ハンセン病', 'desc':''}
],
'番':[
  {'ngword':'番太', 'okword':'', 'desc':'どうしても必要な場合、「番小屋の○○」というようにする'}
],
'町':[
  {'ngword':'町医者', 'okword':'開業医', 'desc':'個人診療所を経営する開業医の事。大きな病院の勤務医よりレベルが低いという誤解に基づく蔑称。'}
],
'田':[
  {'ngword':'田五作', 'okword':'農民 田舎者', 'desc':'農民、田舎者に対する蔑称。'},
  {'ngword':'田吾作', 'okword':'農民 田舎者', 'desc':'農民、田舎者に対する蔑称。'},
  {'ngword':'田子作', 'okword':'農民 田舎者', 'desc':'農民、田舎者に対する蔑称。'},
  {'ngword':'田舎', 'okword':'', 'desc':'東京と対比する形で「田舎」と言うのはよくない。「町の子供。田舎の子供」のような言い方や、「生まれた土地」の意味で使うのは差し支えないが、このような場合も悪い印象を感じさせないような配慮が必要である（ＮＨＫ）'}
],
'用':[
  {'ngword':'用務員', 'okword':'校務員', 'desc':'現在では校務員という表現を用いている。'}
],
'産':[
  {'ngword':'産婆', 'okword':'助産婦', 'desc':''}
],
'獣':[
  {'ngword':'獣医', 'okword':'獣医師', 'desc':''}
],
'猫':[
  {'ngword':'猫糞', 'okword':'着服', 'desc':'ねこばば。なるべく使わない'}
],
'狂':[
  {'ngword':'狂気', 'okword':'', 'desc':'なるべく使わない'},
  {'ngword':'狂気の沙汰', 'okword':'', 'desc':'なるべく使わない'},
  {'ngword':'狂女', 'okword':'精神障害者', 'desc':''},
  {'ngword':'狂人', 'okword':'', 'desc':'むやみに多用しない'}
],
'犬':[
  {'ngword':'犬殺し', 'okword':'野犬捕獲員 狂犬病予防技術員', 'desc':'職業名'}
],
'特':[
  {'ngword':'特殊学級', 'okword':'身障児学級', 'desc':''},
  {'ngword':'特殊学校', 'okword':'特殊教育学校 ', 'desc':'養護学校、盲・ろう学校などの総称'},
  {'ngword':'特殊部落', 'okword':'同和地区', 'desc':''}
],
'片':[
  {'ngword':'片手落ち', 'okword':'気配りに欠ける 不公平', 'desc':'本来侮蔑語ではないが「片手・落ち」と誤解されるのでなるべく使わない'},
  {'ngword':'片親', 'okword':'母子家庭 父子家庭', 'desc':''},
  {'ngword':'片足', 'okword':'片方の足', 'desc':''},
  {'ngword':'片端', 'okword':'身体障害者', 'desc':''},
  {'ngword':'片肺', 'okword':'片翼', 'desc':'比喩的表現の場合は要注意。双発の飛行機が片方のエンジンしか動かない状態から'},
  {'ngword':'片目', 'okword':'片方の目 隻眼 独眼', 'desc':''}
],
'父':[
  {'ngword':'父兄', 'okword':'父母 保護者', 'desc':'女性に対する差別'}
],
'潜':[
  {'ngword':'潜水夫', 'okword':'潜水作業員', 'desc':''}
],
'漁':[
  {'ngword':'漁夫', 'okword':'漁民 漁船員', 'desc':'「漁夫の利」が放送禁止用語である記述は確認できないため、慣用句としては使用可?'}
],
'滑':[
  {'ngword':'滑り止め', 'okword':'併願校 安全校', 'desc':'現在でも、受験生の間では「滑り止め」は一般に用いられる'}
],
'溺':[
  {'ngword':'溺れ死ぬ', 'okword':'溺れて死ぬ', 'desc':''}
],
'満':[
  {'ngword':'満州', 'okword':'中国東北部（旧満州）', 'desc':'満州事変→柳条湖事件'}
],
'淫':[
  {'ngword':'淫売', 'okword':'売春', 'desc':''}
],
'浮':[
  {'ngword':'浮浪者', 'okword':'ホームレス', 'desc':'日本語には浮浪者の適切な言い換えが無く、英語から代用している'},
  {'ngword':'浮浪児', 'okword':'ホームレスの子供', 'desc':''}
],
'河':[
  {'ngword':'河原乞食', 'okword':'芝居役者', 'desc':'江戸期、歌舞伎が河原で興行されたため。現代において河原に住むホームレスを指す語ではない'}
],
'沖':[
  {'ngword':'沖仲仕', 'okword':'港湾労働者', 'desc':'港湾の荷役作業員に対する蔑称。'}
],
'汲':[
  {'ngword':'汲み取り屋', 'okword':'清掃員 作業員', 'desc':''}
],
'汚':[
  {'ngword':'汚穢屋', 'okword':'', 'desc':'汲み取り式の便所からし尿をポンプで吸い取る作業員に対する蔑称。'}
],
'気':[
  {'ngword':'気違い沙汰', 'okword':'', 'desc':'絶対に使わない。常軌を逸した行いを指す'},
  {'ngword':'気違いに刃物', 'okword':'', 'desc':'絶対に使わない。極めて危険性が高い状況を示す慣用句'},
  {'ngword':'気違い', 'okword':'', 'desc':'原則として使わない。'}
],
'毛':[
  {'ngword':'毛唐', 'okword':'白人', 'desc':''}
],
'正':[
  {'ngword':'正妻', 'okword':'', 'desc':'「正妻のポストを得た」など比喩的用法に注意'}
],
'業':[
  {'ngword':'業病', 'okword':'', 'desc':'使用に注意。悪業の報いでかかる、つらい病気の意'}
],
'植':[
  {'ngword':'植物人間', 'okword':'植物状態人間', 'desc':''}
],
'板':[
  {'ngword':'板前', 'okword':'調理師 板前さん', 'desc':'芸名の一部なら問題ないでしょう'}
],
'東':[
  {'ngword':'東洋人', 'okword':'東アジア人 北方モンゴロイド', 'desc':''}
],
'本':[
  {'ngword':'本腰を入れる', 'okword':'', 'desc':'卑俗な感じを持つ人もあるので、注意して使う'}
],
'未':[
  {'ngword':'未亡人', 'okword':'故○○氏の夫人', 'desc':'未亡人とは、未だ亡くなっていない人という意味'},
  {'ngword':'未開発国', 'okword':'発展途上国 開発途上国', 'desc':''},
  {'ngword':'未開人', 'okword':'原住民', 'desc':''}
],
'朝':[
  {'ngword':'朝鮮征伐', 'okword':'朝鮮出兵 文禄・慶長の役', 'desc':'1592・1597年豊臣秀吉による李氏朝鮮への出兵'},
  {'ngword':'朝鮮人', 'okword':'', 'desc':'歴史関係以外で（特に日本国内や韓国で日本人が）人に向けて使うと差別用語と受け取られる事がある'}
],
'明':[
  {'ngword':'明盲', 'okword':'字の読めない人 非識字者', 'desc':'言い換え語に文盲があるが好ましくない'}
],
'日':[
  {'ngword':'日雇い', 'okword':'自由労働者', 'desc':''},
  {'ngword':'日本のチベット', 'okword':'過疎地帯 辺地 高山地帯', 'desc':'現在チベットは急速に開発が進み、2006年には鉄道としては世界最高地点（海抜5072m）を通りゴルムドとラサを結ぶ「青蔵鉄道」が開通予定'}
],
'新':[
  {'ngword':'新平民', 'okword':'', 'desc':'使わない。江戸期に賤民扱いされていた人々に対する明治以後の蔑称'}
],
'文':[
  {'ngword':'文盲', 'okword':'字の読めない人 非識字者', 'desc':'中国では同義の「文盲wenmang」を現在でも使用しているとされる'}
],
'支':[
  {'ngword':'支那', 'okword':'中国', 'desc':'東シナ海、南シナ海は使用可。語源はChinaと同じく“秦”から、サンスクリット語を経て音訳したもの。本来差別的な意味をもたないはずであるが、差別的に用いた時代経験から日本人が使うと差別的な意味に受け取られやすい。'},
  {'ngword':'支那そば', 'okword':'中華そば', 'desc':'支那は本来差別的な意味をもたないはずであるが、差別的に用いた時代経験から日本人が使うと差別的な意味に受け取られやすい。'},
  {'ngword':'支那チク', 'okword':'メンマ', 'desc':'支那は本来差別的な意味をもたないはずであるが、差別的に用いた時代経験から日本人が使うと差別的な意味に受け取られやすい。'},
  {'ngword':'支那蕎麦', 'okword':'中華そば ラーメン', 'desc':'支那は本来差別的な意味をもたないはずであるが、差別的に用いた時代経験から日本人が使うと差別的な意味に受け取られやすい。'},
  {'ngword':'支那人', 'okword':'中国人', 'desc':'支那は本来差別的な意味をもたないはずであるが、差別的に用いた時代経験から日本人が使うと差別的な意味に受け取られやすい。'},
  {'ngword':'支那竹', 'okword':'メンマ', 'desc':'ある時期から「メンマ」呼称が一気に普及したため、世代によって他方が通じない場合がある'},
  {'ngword':'支那料理', 'okword':'中国料理 中華料理', 'desc':'支那は本来差別的な意味をもたないはずであるが、差別的に用いた時代経験から日本人が使うと差別的な意味に受け取られやすい。'}
],
'掃':[
  {'ngword':'掃除婦', 'okword':'清掃作業員', 'desc':''},
  {'ngword':'掃除夫', 'okword':'清掃作業員', 'desc':''}
],
'按':[
  {'ngword':'按摩', 'okword':'マッサージ師 あんま師', 'desc':'職業名'}
],
'拡':[
  {'ngword':'拡張団長', 'okword':'セールスチーム代表 セールスチームマネージャー セールスチームリーダー', 'desc':'特に、インテリが書いてヤクザが売る出版物を売る人を指す'},
  {'ngword':'拡張団', 'okword':'セールスチーム', 'desc':'特に、インテリが書いてヤクザが売る出版物を売る人を指す'},
  {'ngword':'拡張員', 'okword':'セールススタッフ セールスマン', 'desc':'特に、インテリが書いてヤクザが売る出版物を売る人を指す'}
],
'担':[
  {'ngword':'担ぎ屋', 'okword':'行商人', 'desc':''}
],
'手':[
  {'ngword':'手ん棒', 'okword':'隻腕', 'desc':'片方の腕が無い人を指す'}
],
'愚':[
  {'ngword':'愚鈍', 'okword':'', 'desc':'使わない。無知で間が抜けている者の意'}
],
'情':[
  {'ngword':'情夫', 'okword':'愛人', 'desc':''},
  {'ngword':'情婦', 'okword':'愛人', 'desc':''}
],
'心':[
  {'ngword':'心障者', 'okword':'心身障害者', 'desc':'略さない。やむを得ない場合「身障者」とする'},
  {'ngword':'心障児', 'okword':'心身障害児', 'desc':'略さない。やむを得ない場合「身障児」とする'}
],
'後':[
  {'ngword':'後進国', 'okword':'開発途上国 発展途上国', 'desc':''}
],
'当':[
  {'ngword':'当て馬', 'okword':'交代要員', 'desc':'野球の場合'}
],
'強':[
  {'ngword':'強姦', 'okword':'乱暴 暴行', 'desc':'刑法上は別。対義語は和姦'}
],
'引':[
  {'ngword':'引かれ者', 'okword':'', 'desc':'なるべく使わない。刑場に引かれていく罪人の意か'}
],
'床':[
  {'ngword':'床屋', 'okword':'理容師 理髪師 理容業 理髪店', 'desc':''}
],
'工':[
  {'ngword':'工夫', 'okword':'労働者 作業員', 'desc':''}
],
'川':[
  {'ngword':'川向こう', 'okword':'', 'desc':'使わない。川を隔てたむこうの岸の意'}
],
'屠':[
  {'ngword':'屠殺人', 'okword':'食肉市場職員 屠畜場従業員', 'desc':''},
  {'ngword':'屠殺', 'okword':'食肉解体', 'desc':''},
  {'ngword':'屠殺場', 'okword':'屠畜場', 'desc':''}
],
'屑':[
  {'ngword':'屑屋', 'okword':'廃品回収業者 資源交換業', 'desc':''}
],
'尻':[
  {'ngword':'尻拭い', 'okword':'後始末', 'desc':''}
],
'小':[
  {'ngword':'小使い', 'okword':'用務員 校務員', 'desc':''},
  {'ngword':'小人', 'okword':'', 'desc':'子供を表した小人（しょうにん）は良いが、身長が未発達の人を表した小人（こびと）はあまり好まれない。'},
  {'ngword':'小僧', 'okword':'店員', 'desc':''}
],
'将':[
  {'ngword':'将棋倒しになる', 'okword':'折り重なるように倒れる', 'desc':'将棋連盟からの申し入れによる。ちなみにビリヤード協会は「玉突き事故」を容認している'}
],
'富':[
  {'ngword':'富山の三助', 'okword':'', 'desc':'なるべく使わない'}
],
'寄':[
  {'ngword':'寄目', 'okword':'斜視', 'desc':''},
  {'ngword':'寄せ場', 'okword':'', 'desc':'「人足寄せ場」の意。人足寄せ場とは江戸期に設けられたホームレス収容・職業訓練所'}
],
'家':[
  {'ngword':'家柄', 'okword':'', 'desc':'結婚、就職の条件にするような表現は不可'},
  {'ngword':'家系', 'okword':'', 'desc':'なるべく使わない。「適性は家系と深くかかわる」などは不可'}
],
'孤':[
  {'ngword':'孤児院', 'okword':'児童養護施設', 'desc':''}
],
'嬢':[
  {'ngword':'嬢', 'okword':'手', 'desc':'電話交換嬢→電話交換手。うぐいす嬢など愛称は別'}
],
'嫁':[
  {'ngword':'嫁にやる', 'okword':'', 'desc':'なるべく使わない'}
],
'婿':[
  {'ngword':'婿をとる', 'okword':'', 'desc':'なるべく使わない'}
],
'娘':[
  {'ngword':'娘を片付ける', 'okword':'', 'desc':'なるべく使わない'}
],
'姦':[
  {'ngword':'姦通', 'okword':'不倫行為', 'desc':''}
],
'妾':[
  {'ngword':'妾', 'okword':'愛人', 'desc':''}
],
'女':[
  {'ngword':'女給', 'okword':'ホステス ウェイトレス', 'desc':'給仕と同じく、時代背景から用いる場合がある'},
  {'ngword':'女傑', 'okword':'女流 女性', 'desc':'女性に対する差別'},
  {'ngword':'女工', 'okword':'女子工員 女子従業員', 'desc':'時代背景を明確にした場合はよい'},
  {'ngword':'女史', 'okword':'', 'desc':'女性に対する差別'},
  {'ngword':'女子供', 'okword':'', 'desc':'なるべく使わない。女性や子供を軽んじる意を持つ'},
  {'ngword':'女中', 'okword':'お手伝いさん', 'desc':''}
],
'天':[
  {'ngword':'天才と狂人は紙一重', 'okword':'', 'desc':'なるべく使わない'}
],
'外':[
  {'ngword':'外人', 'okword':'外国人', 'desc':'「グループ外、縁もゆかりも無い人」が原義。'}
],
'士':[
  {'ngword':'士農工商', 'okword':'身分社会 階級制度', 'desc':'江戸時代の身分制度を表し、日本史を学ぶ場合には外せない項目であるが、一部では差別用語と解する向きもある。'}
],
'垂':[
  {'ngword':'垂れ流す', 'okword':'流しっぱなしにする', 'desc':'公害問題は例外'}
],
'坑':[
  {'ngword':'坑夫', 'okword':'鉱山労働者 鉱員', 'desc':''}
],
'坊':[
  {'ngword':'坊主', 'okword':'僧侶 お坊さん', 'desc':'僧侶あるいは男児（だいたい10歳くらいまで）に対する蔑称。本来は僧侶に対する尊称であったが、いつの間にか蔑称に変じる。これは二人称を示す「貴様」や「お前」と同様の変化。'}
],
'地':[
  {'ngword':'地回り', 'okword':'暴力団員', 'desc':''},
  {'ngword':'地まわり', 'okword':'暴力団員', 'desc':''}
],
'土':[
  {'ngword':'土方', 'okword':'労働者 作業員', 'desc':'建設・土木系日雇い労働者'},
  {'ngword':'土人', 'okword':'原住民', 'desc':''},
  {'ngword':'土左衛門', 'okword':'水死人', 'desc':'その様相が江戸期の力士「成瀬川土左衛門」を連想させたことから'},
  {'ngword':'土工', 'okword':'労働者 作業員', 'desc':''},
  {'ngword':'土建屋', 'okword':'土建業者 建設業者', 'desc':''}
],
'四':[
  {'ngword':'四つ足', 'okword':'', 'desc':'なるべく使わない。被差別部落を連想させる文脈では不可。四つ。関西地方で強く残るとも'},
  {'ngword':'四つ辻', 'okword':'十字路', 'desc':''}
],
'唖':[
  {'ngword':'唖', 'okword':'口の不自由な人 聾者 ろうあ者', 'desc':''}
],
'周':[
  {'ngword':'周旋屋', 'okword':'周旋業者 土地斡旋業者', 'desc':''}
],
'名':[
  {'ngword':'名門校', 'okword':'', 'desc':'なるべく使わない。野球放送などで「名門○○校」などという場合はあまり抵抗はない'}
],
'合':[
  {'ngword':'合いの子', 'okword':'混血 混血人', 'desc':'日本人と外国人の間に生まれた子供。又、違う種類の動物の間に生まれた子供の場合はあいの子も使われるが、いずれも差別用語あるいは不快感を与える用語として、放送での使用は控えられている。'}
],
'吃':[
  {'ngword':'吃', 'okword':'言語障害者 吃音', 'desc':''}
],
'台':[
  {'ngword':'台湾ハゲ', 'okword':'禿頭病', 'desc':''},
  {'ngword':'台湾政府', 'okword':'台湾当局', 'desc':'1972年日中国交樹立以後、日本政府は台湾政府を認めていないため'}
],
'南':[
  {'ngword':'南部の鮭の鼻まがり', 'okword':'', 'desc':'なるべく使わない。産卵期に鮭の鼻が曲がる特性と、南部人（盛岡）がヘソ曲がりなのを掛けた語'},
  {'ngword':'南部のシャケの鼻まがり', 'okword':'', 'desc':'なるべく使わない。産卵期に鮭の鼻が曲がる特性と、南部人（盛岡）がヘソ曲がりなのを掛けた語'},
  {'ngword':'南鮮', 'okword':'大韓民国 韓国', 'desc':''}
],
'半':[
  {'ngword':'半島人', 'okword':'', 'desc':'使わないこと'}
],
'千':[
  {'ngword':'千摺り', 'okword':'自慰行為 オナニー', 'desc':'多数回男性器を摺ることから'}
],
'北':[
  {'ngword':'北鮮', 'okword':'朝鮮民主主義人民共和国 北朝鮮', 'desc':''}
],
'労':[
  {'ngword':'労務者', 'okword':'労働者', 'desc':''}
],
'出':[
  {'ngword':'出稼ぎ', 'okword':'季節労働者', 'desc':''},
  {'ngword':'出戻り', 'okword':'', 'desc':'使わない。結婚した女性が離婚して生家に帰る、またその人の意'}
],
'処':[
  {'ngword':'処女作', 'okword':'第一作', 'desc':''},
  {'ngword':'処女峰', 'okword':'未踏峰', 'desc':''}
],
'共':[
  {'ngword':'共稼ぎ', 'okword':'共働き', 'desc':''}
],
'八':[
  {'ngword':'八百屋', 'okword':'青果業 青果商 八百屋さん', 'desc':''}
],
'先':[
  {'ngword':'先公', 'okword':'学校の教員 教諭 講師', 'desc':'元来は学生言葉'}
],
'傴':[
  {'ngword':'傴僂', 'okword':'猫背', 'desc':'なるべく使わない。'}
],
'倭':[
  {'ngword':'倭奴', 'okword':'日本 日本人', 'desc':'朝鮮半島の人が日本人に使う:ウェノム'}
],
'保':[
  {'ngword':'保線工夫', 'okword':'保線区員 保線作業員', 'desc':''}
],
'低':[
  {'ngword':'低開発国', 'okword':'開発途上国 発展途上国', 'desc':''},
  {'ngword':'低脳児', 'okword':'学習障害児 学習困難児', 'desc':''},
  {'ngword':'低脳', 'okword':'学習障害 学習困難', 'desc':''}
],
'伊':[
  {'ngword':'伊勢乞食', 'okword':'', 'desc':'なるべく使わない。節倹（ケチ）な伊勢の人をののしっていう語'},
  {'ngword':'伊勢こじき', 'okword':'（なるべく使わない）', 'desc':''}
],
'令':[
  {'ngword':'令嬢', 'okword':'娘', 'desc':'不必要な所に使うと逆差別になる'}
],
'代':[
  {'ngword':'代書屋', 'okword':'行政書士', 'desc':''}
],
'他':[
  {'ngword':'他力本願', 'okword':'', 'desc':'「他人任せ」の意味で使うのは誤用。弥陀の本願の力に頼って成仏する意'}
],
'人':[
  {'ngword':'人夫', 'okword':'労働者 作業員', 'desc':''},
  {'ngword':'人非人', 'okword':'人でなし', 'desc':''},
  {'ngword':'人足', 'okword':'労働者 作業員', 'desc':''}
],
'二':[
  {'ngword':'二号', 'okword':'愛人', 'desc':''}
],
'乞':[
  {'ngword':'乞食', 'okword':'ホームレス', 'desc':''}
],
'中':[
  {'ngword':'中共', 'okword':'中華人民共和国 中国', 'desc':'中国共産党の略ならよい'}
],
'不':[
  {'ngword':'不治の病', 'okword':'治りにくい病気 難病', 'desc':''},
  {'ngword':'不可触民', 'okword':'ハリジャン', 'desc':'インドのカースト制におけるカースト外の身分'},
  {'ngword':'不具', 'okword':'身体障害者', 'desc':''}
],
'下':[
  {'ngword':'下男', 'okword':'お手伝いさん', 'desc':''},
  {'ngword':'下女', 'okword':'お手伝いさん', 'desc':''}
],
'上':[
  {'ngword':'上方のぜい六', 'okword':'', 'desc':'なるべく使わない。江戸の者が関西人をあざけっていった称'},
  {'ngword':'上方の贅六', 'okword':'', 'desc':'なるべく使わない。江戸の者が関西人をあざけっていった称'}
],
'三':[
  {'ngword':'三助', 'okword':'浴場従業員', 'desc':''},
  {'ngword':'三国人', 'okword':'中国人、韓国人', 'desc':'第二次大戦中から終戦後にかけ、日米両国に対し中国韓国を第三者として「三国」と呼称したことから'},
  {'ngword':'三韓征伐', 'okword':'三韓出兵', 'desc':'3世紀、神功皇后が行った（とされる）新羅から百済・高句麗への出兵を示し、日本書紀に記述が残る'},
  {'ngword':'三つ口', 'okword':'口唇裂', 'desc':'上唇が生まれつき裂けている状態'}
],
'丁':[
  {'ngword':'丁稚', 'okword':'店員', 'desc':''}
],
'ロ':[
  {'ngword':'ロスケ', 'okword':'ロシア人', 'desc':''},
  {'ngword':'ロン・パリ', 'okword':'斜視', 'desc':'一方の目でロンドンを見、他方の目でパリを見るような様を侮蔑して'},
  {'ngword':'ロンパリ', 'okword':'斜視', 'desc':'一方の目でロンドンを見、他方の目でパリを見るような様を侮蔑して'}
],
'レ':[
  {'ngword':'レズ', 'okword':'同性愛者', 'desc':'当事者の間には、これらの言葉を差別用語として扱う事への批判も多く、逆にこれらの言葉を肯定的に使っていこうという動きがある。'},
  {'ngword':'レントゲン技師', 'okword':'診療放射線技師 診療エックス線技師', 'desc':'「診療エックス線技師」は旧制度の資格で、保持者は少数'}
],
'ル':[
  {'ngword':'ルンペン', 'okword':'ホームレス', 'desc':''}
],
'ラ':[
  {'ngword':'ライ病', 'okword':'ハンセン病', 'desc':''}
],
'ヤ':[
  {'ngword':'ヤー様', 'okword':'やくざ', 'desc':''},
  {'ngword':'ヤバい', 'okword':'危ない 危険だ', 'desc':''},
  {'ngword':'ヤブ医者', 'okword':'下手な医者', 'desc':'診断・治療の能力の劣った医者'},
  {'ngword':'ヤンキー', 'okword':'アメリカ人 不良行為少年 不良少年', 'desc':'アメリカ人、特に米国北東部住民に対する俗称・蔑称 / 内弁話者に対する蔑称。「『やんけ』言い」が転じて。'}
],
'マ':[
  {'ngword':'マンコ', 'okword':'女性器', 'desc':'ちんこは禁止されず。'}
],
'ポ':[
  {'ngword':'ポコペン', 'okword':'中国人', 'desc':'中国語の「不 句多 本 bu gou ben」(金額が足りない)から。かつて日中貿易の際、中国人商人がよく用いたことから'},
  {'ngword':'ポッポー屋', 'okword':'鉄道員', 'desc':''},
  {'ngword':'ポッポ屋', 'okword':'鉄道員', 'desc':''},
  {'ngword':'ポリ公', 'okword':'警察官', 'desc':''}
],
'ボ':[
  {'ngword':'ボケ', 'okword':'認知症', 'desc':'老化に伴って起こる痴呆を主とする症状。'}
],
'ホ':[
  {'ngword':'ホモ', 'okword':'同性愛者', 'desc':'当事者の間には、これらの言葉を差別用語として扱う事への批判も多く、逆にこれらの言葉を肯定的に使っていこうという動きがある。'}
],
'ペ':[
  {'ngword':'ペイ患', 'okword':'麻薬患者', 'desc':''},
  {'ngword':'ペイ中', 'okword':'麻薬中毒', 'desc':''}
],
'ブ':[
  {'ngword':'ブス', 'okword':'', 'desc':'使わない'},
  {'ngword':'ブタ箱', 'okword':'留置場', 'desc':''},
  {'ngword':'ブツ', 'okword':'盗品　品物', 'desc':''},
  {'ngword':'ブッシュマン', 'okword':'サン', 'desc':'映画のタイトルもシリーズ途中から変更になりました'}
],
'ヒ':[
  {'ngword':'ヒモ', 'okword':'関係ある男', 'desc':'女に金品を貢がせて生活する男を指す俗語'},
  {'ngword':'ヒンガラメ', 'okword':'斜視参照。', 'desc':''}
],
'パ':[
  {'ngword':'パーマ屋', 'okword':'美容院', 'desc':''},
  {'ngword':'パクる', 'okword':'逮捕する 盗む', 'desc':''},
  {'ngword':'パン助', 'okword':'娼婦', 'desc':''}
],
'バ':[
  {'ngword':'バタ屋', 'okword':'廃品回収業者 資源交換業', 'desc':''},
  {'ngword':'バカチョンカメラ', 'okword':'オートマチック（自動）カメラ', 'desc':''}
],
'ハ':[
  {'ngword':'ハーフ', 'okword':'混血（人）', 'desc':'日本人と外国人の間に生まれた子供。又、違う種類の動物の間に生まれた子供の場合はあいの子も使われるが、いずれも差別用語あるいは不快感を与える用語として、放送での使用は控えられている。'}
],
'ノ':[
  {'ngword':'ノビ', 'okword':'空き巣', 'desc':''}
],
'ネ':[
  {'ngword':'ネコババ', 'okword':'着服', 'desc':'猫が糞に泥をかけて隠すことから'}
],
'ニ':[
  {'ngword':'ニーグロ', 'okword':'黒人', 'desc':'黒色人種を指す。ネグロイドを参照。同義だがニガ（nigga）を黒色人種自身が使用する場合は例外的に「同志」を意味し、差別的な意味はないともされる。又、野球の「ニグロリーグ」という言葉としてならば固有名詞とされ差別的な意味はないとされる。'},
  {'ngword':'ニガー', 'okword':'黒人', 'desc':'黒色人種を指す。ネグロイドを参照。同義だがニガ（nigga）を黒色人種自身が使用する場合は例外的に「同志」を意味し、差別的な意味はないともされる。又、野球の「ニグロリーグ」という言葉としてならば固有名詞とされ差別的な意味はないとされる。'},
  {'ngword':'ニグロ', 'okword':'黒人', 'desc':'黒色人種を指す。ネグロイドを参照。同義だがニガ（nigga）を黒色人種自身が使用する場合は例外的に「同志」を意味し、差別的な意味はないともされる。又、野球の「ニグロリーグ」という言葉としてならば固有名詞とされ差別的な意味はないとされる。'},
  {'ngword':'ニコヨン', 'okword':'自由労働者', 'desc':'職業安定所からの定額給が240円（100円2個と40円）だったことから'}
],
'ナ':[
  {'ngword':'ナオン', 'okword':'女 情婦', 'desc':''}
],
'ド':[
  {'ngword':'ドカチン', 'okword':'労働者 作業員', 'desc':'建設・土木系日雇い労働者'},
  {'ngword':'ドヤ', 'okword':'犯人の隠れやすい宿', 'desc':''},
  {'ngword':'ドヤ街', 'okword':'簡易宿泊街', 'desc':''}
],
'ト':[
  {'ngword':'トルコ嬢', 'okword':'ソープレディ', 'desc':''},
  {'ngword':'トルコ風呂', 'okword':'ソープランド', 'desc':'トルコ政府の要請に加え、1984年トルコ人留学生ヌスレット・サンジャクリによる厚生省直訴により改名、一部が支持した「ロマン風呂」を抑えて定着した'}
],
'デ':[
  {'ngword':'デカ', 'okword':'刑事', 'desc':''}
],
'チ':[
  {'ngword':'チビ', 'okword':'', 'desc':'使わない。'},
  {'ngword':'チャリンコ', 'okword':'スリ', 'desc':''},
  {'ngword':'チャンコロ', 'okword':'中国人', 'desc':''},
  {'ngword':'チョッパリ', 'okword':'日本人', 'desc':'日本、直訳すると豚の足。足袋の先は二つに割れていることから。ちなみに在日韓国朝鮮人は、半チョッパリと侮蔑されている。'},
  {'ngword':'チョラ', 'okword':'', 'desc':'南米でインディオの特徴を強く持つ人々を指す。'},
  {'ngword':'チョリータ', 'okword':'', 'desc':'南米でインディオの特徴を強く持つ人々を指す。'},
  {'ngword':'チョロ', 'okword':'', 'desc':'南米でインディオの特徴を強く持つ人々を指す。'},
  {'ngword':'チョン', 'okword':'朝鮮人', 'desc':''},
  {'ngword':'チョンコ', 'okword':'朝鮮人', 'desc':''}
],
'ダ':[
  {'ngword':'ダッチマン', 'okword':'オランダ人', 'desc':''}
],
'タ':[
  {'ngword':'タケノコ医者', 'okword':'下手な医者', 'desc':'なるべく使わない。“やぶ”にも満たない技術の劣る医者の意'},
  {'ngword':'タタキ', 'okword':'強盗', 'desc':''}
],
'ス':[
  {'ngword':'スケ', 'okword':'女 情婦', 'desc':''},
  {'ngword':'スラム', 'okword':'貧民街', 'desc':'なるべく使わない。'}
],
'ジ':[
  {'ngword':'ジプシー', 'okword':'遊牧民族', 'desc':'白色人種に属する黒髪・黒眼の漂泊の民。自称、ロマ。'},
  {'ngword':'ジャップ', 'okword':'日本人', 'desc':'アメリカ等ではJapよりもNipの方が強い侮蔑を示すが、日本では一般的ではない'},
  {'ngword':'ジャリ', 'okword':'子供', 'desc':''},
  {'ngword':'ジュー', 'okword':'ユダヤ人', 'desc':'Jew。欧米でユダヤ人を罵っていう語'}
],
'シ':[
  {'ngword':'シマ', 'okword':'なわばり', 'desc':''}
],
'ザ':[
  {'ngword':'ザギン', 'okword':'銀座', 'desc':''}
],
'サ':[
  {'ngword':'サンボ', 'okword':'', 'desc':'黒人（ネグロイド）または黒人とインディオの混血を指す'},
  {'ngword':'サラ金', 'okword':'消費者金融', 'desc':''},
  {'ngword':'サラブレッド', 'okword':'', 'desc':'比喩表現に注意。サラブレッドには厳格な血統登録が行われ、1頭1頭に全て血統書が存在する'},
  {'ngword':'サツ', 'okword':'警察', 'desc':''}
],
'ゴ':[
  {'ngword':'ゴミ屋', 'okword':'廃品回収業者 資源交換業', 'desc':''}
],
'コ':[
  {'ngword':'コロシ', 'okword':'殺人', 'desc':''}
],
'ゲ':[
  {'ngword':'ゲイ', 'okword':'同性愛者', 'desc':'当事者の間には、これらの言葉を差別用語として扱う事への批判も多く、逆にこれらの言葉を肯定的に使っていこうという動きがある。'}
],
'ク':[
  {'ngword':'クズ屋', 'okword':'廃品回収業者 資源交換業', 'desc':''},
  {'ngword':'クロ', 'okword':'黒人', 'desc':'1988年岩波書店「ちびくろサンボ」は一旦絶版になったが、2005年瑞雲舎から復刊した'}
],
'キ':[
  {'ngword':'キチ', 'okword':'マニア', 'desc':'気違いの略。釣りキチ→釣りマニア'},
  {'ngword':'キ印', 'okword':'精神障害者', 'desc':'使わない。'}
],
'ガ':[
  {'ngword':'ガキ', 'okword':'子供', 'desc':'食物をむさぼることから子供を卑しめて言う語 '},
  {'ngword':'ガサ', 'okword':'家宅捜索', 'desc':'てきやなどの隠語。「さがす」の「さが」の倒語'}
],
'カ':[
  {'ngword':'カッペ', 'okword':'田舎者', 'desc':'田舎兵衛（いなかっぺえ）の略。田舎者をさげすんでいう語'}
],
'オ':[
  {'ngword':'オールドミス', 'okword':'', 'desc':'未婚のまま婚期を過ぎた女性。和製英語。'},
  {'ngword':'オカマ', 'okword':'同性愛者', 'desc':'当事者の間には、これらの言葉を差別用語として扱う事への批判も多く、逆にこれらの言葉を肯定的に使っていこうという動きがある。'}
],
'エ':[
  {'ngword':'エスキモー', 'okword':'イヌイット', 'desc':'アジアや北アメリカの北部など極北地域に住むモンゴル系の民族。イヌイット、ユピック等を含む多くの民族から成る。'},
  {'ngword':'エディター', 'okword':'編集者', 'desc':''}
],
'イ':[
  {'ngword':'イカサマ', 'okword':'にせもの', 'desc':''},
  {'ngword':'イタ公', 'okword':'イタリア人', 'desc':''},
  {'ngword':'イモ', 'okword':'田舎者', 'desc':'なるべく使わない'},
  {'ngword':'インチキ', 'okword':'ごまかし まやかし', 'desc':''},
  {'ngword':'インディアン', 'okword':'ネイティブアメリカン', 'desc':''},
  {'ngword':'インディアン嘘つかない', 'okword':'', 'desc':'比喩表現は不可'},
  {'ngword':'インディオ', 'okword':'ネイティブアメリカン', 'desc':''}
],
'ア':[
  {'ngword':'アイヌ系', 'okword':'アイヌ', 'desc':'アイヌ系はアイヌ民族に対する強制同化が生んだ言葉'},
  {'ngword':'アオカン', 'okword':'野合', 'desc':''},
  {'ngword':'アカ', 'okword':'共産主義者', 'desc':'シンボルの赤旗から'},
  {'ngword':'アメ公', 'okword':'アメリカ人', 'desc':''},
  {'ngword':'アル中', 'okword':'アルコール中毒 アルコール依存症', 'desc':'「…中毒」は急性、「…依存症」は慢性'}
],
'よ':[
  {'ngword':'よいよい', 'okword':'中風', 'desc':'脳梗塞や脳卒中（脳血管障害の一種）により、手足が麻痺した人'}
],
'や':[
  {'ngword':'やばい', 'okword':'危ない 危険だ', 'desc':''},
  {'ngword':'やさぐれ', 'okword':'愚連隊', 'desc':''}
],
'め':[
  {'ngword':'めくら滅法', 'okword':'', 'desc':'なるべく使わない'},
  {'ngword':'めくら判', 'okword':'ろくに見ないで判を押す', 'desc':'なるべく使わない'},
  {'ngword':'めくら蛇におじず', 'okword':'', 'desc':'なるべく使わない'},
  {'ngword':'めくら縞', 'okword':'', 'desc':'なるべく使わない'},
  {'ngword':'めくら', 'okword':'視力障害者 目の不自由な人', 'desc':''}
],
'み':[
  {'ngword':'みつくち', 'okword':'口蓋裂', 'desc':'上唇が生まれつき裂けている状態'}
],
'ま':[
  {'ngword':'まえつき', 'okword':'前歴つき', 'desc':''}
],
'ぽ':[
  {'ngword':'ぽん引き', 'okword':'客引き', 'desc':''}
],
'ほ':[
  {'ngword':'ほんぼし', 'okword':'真犯人', 'desc':''}
],
'び':[
  {'ngword':'びっこ', 'okword':'足の悪い人、足の不自由な人', 'desc':''}
],
'ば':[
  {'ngword':'ばてい', 'okword':'馬手 厩務員', 'desc':'競馬法では馬丁のまま、明治からの賎業としての「馬丁」が連想されるため問題となる'}
],
'の':[
  {'ngword':'のうまくえん', 'okword':'精神障害者', 'desc':''}
],
'ど':[
  {'ngword':'どさ回り', 'okword':'地方巡業', 'desc':''},
  {'ngword':'どや街', 'okword':'簡易宿泊街', 'desc':''},
  {'ngword':'どもり', 'okword':'言語障害者、吃音', 'desc':''},
  {'ngword':'どん百姓', 'okword':'農民 農家の人 お百姓さん', 'desc':''}
],
'て':[
  {'ngword':'てんぼう', 'okword':'隻腕', 'desc':''}
],
'つ':[
  {'ngword':'つんぼ桟敷', 'okword':'きこえないところ', 'desc':''},
  {'ngword':'つんぼ', 'okword':'耳の不自由な人', 'desc':''}
],
'ち':[
  {'ngword':'ちゃんころ', 'okword':'中国人', 'desc':''},
  {'ngword':'ちんば', 'okword':'足の悪い人、足の不自由な人', 'desc':''}
],
'た':[
  {'ngword':'たれ流し', 'okword':'流しっぱなし', 'desc':''},
  {'ngword':'たごさく', 'okword':'農民 田舎者', 'desc':'農民、田舎者に対する蔑称。'}
],
'せ':[
  {'ngword':'せんずり', 'okword':'自慰行為。オナニー', 'desc':''},
  {'ngword':'せむし', 'okword':'猫背', 'desc':'昔、背に虫がいるためになると考えられていたことから'}
],
'ず':[
  {'ngword':'ずらかる', 'okword':'逃げる', 'desc':''}
],
'す':[
  {'ngword':'すけこまし', 'okword':'漁色家 プレイボーイ', 'desc':''}
],
'し':[
  {'ngword':'しりぬぐい', 'okword':'後始末', 'desc':''},
  {'ngword':'しらっこ', 'okword':'アルビノ 白皮症', 'desc':''},
  {'ngword':'しらこ', 'okword':'アルビノ 白皮症', 'desc':''}
],
'こ':[
  {'ngword':'こびと', 'okword':'', 'desc':'子供を表した小人（しょうにん）は良いが、身長が未発達の人を表した小人（こびと）はあまり好まれない。'}
],
'く':[
  {'ngword':'くろんぼ', 'okword':'黒人', 'desc':'1988年岩波書店「ちびくろサンボ」は一旦絶版になったが、2005年瑞雲舎から復刊した'},
  {'ngword':'くわえ込む', 'okword':'', 'desc':'なるべく使わない。卑俗に聞こえるためと、慣用句として異性を連れ込む意があるからか'},
  {'ngword':'くわえこむ', 'okword':'', 'desc':'なるべく使わない。卑俗に聞こえるためと、慣用句として異性を連れ込む意があるからか'}
],
'き':[
  {'ngword':'きちがいに刃物', 'okword':'', 'desc':'絶対に使わない'},
  {'ngword':'きちがい', 'okword':'精神障害者', 'desc':'原則として使わない'},
  {'ngword':'きちがい沙汰', 'okword':'', 'desc':'絶対に使わない'},
  {'ngword':'き印', 'okword':'精神障害者', 'desc':'使わない。'},
  {'ngword':'きこり', 'okword':'林業に従事する人', 'desc':''}
],
'が':[
  {'ngword':'がちゃ目', 'okword':'斜視', 'desc':''}
],
'か':[
  {'ngword':'かさっかき', 'okword':'性病患者', 'desc':''},
  {'ngword':'かたわ', 'okword':'身体障害者', 'desc':''},
  {'ngword':'かつぎ屋', 'okword':'行商人', 'desc':''},
  {'ngword':'かわかぶり', 'okword':'包茎', 'desc':'包茎の俗称。'}
],
'お':[
  {'ngword':'おんぼう', 'okword':'火葬場従業員', 'desc':'斎場の火葬作業員に対する蔑称。かつては死者が身に着けている装飾品や金歯など焼け残った物を奪うと信じられていた。'},
  {'ngword':'おまわり', 'okword':'警察官 お巡りさん 巡査', 'desc':'幼児語としての「お巡りさん」は可とする'},
  {'ngword':'お巡り', 'okword':'警察官 お巡りさん 巡査', 'desc':'幼児語としての「お巡りさん」は可とする'},
  {'ngword':'おきなかし', 'okword':'港湾労働者', 'desc':'港湾の荷役作業員に対する蔑称。'},
  {'ngword':'おわい屋', 'okword':'清掃員 作業員', 'desc':'「おわい」は大小便の意'},
  {'ngword':'おとしまえ', 'okword':'金銭のからんだ決着', 'desc':''}
],
'う':[
  {'ngword':'うんこ', 'okword':'大便 うんち', 'desc':''}
],
'い':[
  {'ngword':'いぬころし', 'okword':'野犬捕獲員 狂犬病予防技術員', 'desc':'職業名'},
  {'ngword':'いちゃもん', 'okword':'言い掛かり', 'desc':''},
  {'ngword':'いざり', 'okword':'足の悪い人、足の不自由な人', 'desc':''},
  {'ngword':'いんちき', 'okword':'ごまかし まやかし', 'desc':''},
  {'ngword':'いちゃもんをつける', 'okword':'いいがかりをつける', 'desc':''}
],
'あ':[
  {'ngword':'あらめん', 'okword':'初対面', 'desc':''},
  {'ngword':'あきめくら', 'okword':'字の読めない人、文盲', 'desc':''},
  {'ngword':'あいのこ', 'okword':'混血（人）', 'desc':'日本人と外国人の間に生まれた子供。又、違う種類の動物の間に生まれた子供の場合はあいの子も使われるが、いずれも差別用語あるいは不快感を与える用語として、放送での使用は控えられている。'},
  {'ngword':'あて馬', 'okword':'交代要員', 'desc':'野球の場合は交代要員'}
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
                nbody+="<b style=\"background:#ff2222;color:#CCCCFF\" title=\"修正候補：";
                if(words[mbody.charAt(i)][j].okword == ""){words[mbody.charAt(i)][j].okword="なし"};
                nbody+=words[mbody.charAt(i)][j].okword +"　解説：";
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
    alert("差別用語の検索が終了しました。\n"+ngnum+"件の訂正候補があります。ご確認ください。" + timer1);
}else{
    alert("差別用語の検索が終了しました。修正候補となる表現は検出されませんでした。" + timer1);
}


;})

();
