const quizWordSets = {
    "Quiz Ex": {
        "規制": ["きせい", "Regulation", "restriction", "企業の活動を規制する。", "kigyō no katsudō o kisei suru.", "Regulate corporate activities."],
        "個人主義": ["こじんしゅぎ", "Individualism", null, "個人主義が現代社会で強まっている。", "kojin shugi ga gendai shakai de tsuyomatte iru.", "Individualism is growing stronger in modern society."],
        "家父長制度": ["かふちょうせいど", "Patriarchal system", null, "家父長制度は昔の家族制度です。", "kafuchō seidō wa mukashi no kazoku seido desu.", "The patriarchal system is an old family system."],
        "権力": ["けんりょく", "Power", "authority", "政治的権力を持つ。", "seiteki kenryoku o motsu.", "To have political power."],
        "モラル": ["モラル", "Morals", "ethics", "モラルに反する行為は許されない。", "moraru ni hansuru kōi wa yurusarenai.", "Acts against morals are not allowed."],
        "支配": ["しはい", "Control", "domination", "市場を支配する。", "shijō o shihai suru.", "To control the market."],
        "美名": ["びめい", "Good reputation", "fine name", "美名に скрыれて悪事を行う。", "bimei ni kakurete akuji o okonau.", "To do evil deeds under a good reputation."],
        "真裏": ["まうら", "The exact opposite", "the reverse side", "彼の言うことは常に真裏だ。", "kare no iu koto wa tsune ni maura da.", "What he says is always the exact opposite."],
        "見えざる手": ["みえざるて", "Invisible hand", null, "市場原理は見えざる手によって動く。", "shijō genri wa miezaru te ni yotte ugoku.", "Market principles are driven by the invisible hand."],
        "情報": ["じょうほう", "Information", null, "正確な情報を得る。", "seikakuna jōhō o eru.", "To get accurate information."]
    },
    "Quiz 1.1": {
        "尊ぶ": ["とうとぶ", "Respect", "To honor", "伝統文化を尊ぶ。", "dentō bunka o tōtobu.", "To respect traditional culture."],
        "体制的": ["たいせいてき", "Systemic", "Related to the system or regime", "その政策は体制的な変化をもたらした。", "sono seisaku wa taiseiteki na henka o motarashita.", "That policy brought systemic change."],
        "芸術家": ["げいじゅつか", "Artist", "someone who creates art", "彼は有名な芸術家です。", "kare wa yūmeina geijutsuka desu.", "He is a famous artist."],
        "バレリーナ": ["バレリーナ", "Ballerina", "a female ballet dancer", "彼女はプロのバレリーナを目指している。", "kanojo wa puro no barerīna o mezashite iru.", "She aims to become a professional ballerina."],
        "配給": ["はいきゅう", "Distribution", "To distribute, to supply", "食料を被災地に配給する。", "shokuryō o hisaichi ni haikyū suru.", "To distribute food to disaster areas."],
        "優遇する": ["ゆうぐうする", "Favor", "To favor, To give preferential treatment", "特定の顧客を優遇する。", "tokutei no kokyaku o yūgū suru.", "To favor certain customers."],
        "職業": ["しょくぎょう", "Profession", "occupation", "あなたの職業は何ですか？", "anata no shokugyō wa nan desu ka?", "What is your profession?"],
        "等": ["など", "Etcetera", "and so on", "野菜、果物など。", "yasai, kudamono nado.", "Vegetables, fruits, etc."],
        "義務教育": ["ぎむきょういく", "Compulsory education", "mandatory schooling", "義務教育は中学校までです。", "gimukyouiku wa chūgakkō made desu.", "Compulsory education is up to junior high school."],
        "教科": ["きょうか", "Subject", "curriculum", "好きな教科は数学です。", "sukina kyōka wa sūgaku desu.", "My favorite subject is mathematics."]
    },
    "Quiz 1.2": {
        "時間": ["じかん", "Time", "referring to a period or class time", "授業時間割を確認する。", "jugyō jikanwari o kakunin suru.", "Check the class timetable."],
        "減らす": ["へらす", "Reduce", "to reduce, to decrease", "残業時間を減らす。", "zangyō jikan o herasu.", "To reduce overtime hours."],
        "国策": ["こくさく", "National policy", null, "新しい国策が発表された。", "atarashii kokusaku ga happyō sareta.", "A new national policy was announced."],
        "科学的": ["かがくてき", "Scientific", null, "科学的な根拠に基づいて判断する。", "kagakuteki na konkyo ni motozuite handan suru.", "To judge based on scientific evidence."],
        "発見": ["はっけん", "Discovery", null, "新しい惑星を発見する。", "atarashii wakusei o hakken suru.", "To discover a new planet."],
        "迅速な": ["じんそくな", "Swift", "prompt", "迅速な対応が求められる。", "jinsokuna taiō ga motomerareru.", "Swift response is required."],
        "役に立たない": ["やくにたたない", "Useless", "not helpful", "そんな情報は役に立たない。", "sonna jōhō wa yakunitatanai.", "Such information is useless."],
        "感性": ["かんせい", "Sensibility", "sensitivity, the ability to perceive beauty", "豊かな感性を持つ。", "yutakana kansei o motsu.", "To have rich sensibility."],
        "執拗な": ["しつような", "Persistent", "tenacious", "執拗な追跡をかわす。", "shitsuyōna tsuiseki o kawasu.", "To evade persistent pursuit."],
        "努力する": ["どりょくする", "Effort", "To make an effort, to strive", "目標達成のために努力する。", "mokuhyō tassei no tame ni doryoku suru.", "To strive to achieve the goal."]
    },
    "Quiz 2.1": {
        "大同小異": ["だいどうしょうい", "Very similar", "Almost the same", "二つの計画は大同小異だ。", "futatsu no keikaku wa daidōshōi da.", "The two plans are almost the same."],
        "往き来": ["いきき", "Coming and going", "Going back and forth", "東京と大阪を往き来する。", "Tōkyō to Ōsaka o ikiki suru.", "To go back and forth between Tokyo and Osaka."],
        "小異": ["しょうい", "Minor difference", "Small difference", "大筋では同じだが、細部に小異がある。", "ōsuji de wa onaji daga, saibu ni shōi ga aru.", "They are mostly the same, but there are small differences in details."],
        "雑誌": ["ざっし", "Magazine", null, "週刊雑誌を読む。", "shūkan zasshi o yomu.", "To read a weekly magazine."],
        "求める": ["もとめる", "Seek", "To ask for, to seek", "助けを求める。", "tasuke o motomeru.", "To ask for help."],
        "都市風景": ["としふうけい", "City view", "Cityscape", "夜の都市風景は美しい。", "yoru no toshi fūkei wa utsukushii.", "The cityscape at night is beautiful."],
        "多角的": ["たかくてき", "Multilateral", "From many perspectives", "多角的な視点から問題を分析する。", "takakuteki na shiten kara mondai o bunseki suru.", "To analyze the problem from multiple perspectives."],
        "企画": ["きかく", "Project", "Plan, project", "新しいイベントを企画する。", "atarashii ibento o kikaku suru.", "To plan a new event."],
        "相談": ["そうだん", "Consultation", "discussion", "専門家と相談する。", "senmonka to sōdan suru.", "To consult with an expert."],
        "迷わず": ["まよわず", "Decisively", "Without hesitation", "迷わず決断する。", "mayowazu ketsudan suru.", "To decide without hesitation."]
    },
    "Quiz 2.2": {
        "大阪湾岸": ["おおさかわんがん", "Osaka bayside", "Osaka Bay area", "大阪湾岸の夜景を見る。", "Ōsaka wangan no yakei o miru.", "To see the night view of Osaka Bay area."],
        "工場群": ["こうじょうぐん", "Industrial complex", "Factory group", "工場群が立ち並ぶ地域。", "kōjōgun ga tachinarabu chiiki.", "Area where factory groups line up."],
        "港湾施設": ["こうわんしせつ", "Port facility", "Port facilities", "港湾施設を整備する。", "kōwanshīsetsu o seibi suru.", "To improve port facilities."],
        "風景": ["ふうけい", "Scenery", "Landscape, scenery", "美しい風景に感動する。", "utsukushii fūkei ni kandō suru.", "To be moved by the beautiful landscape."],
        "編集者": ["へんしゅうしゃ", "Editor", null, "雑誌の編集者として働く。", "zasshi no henshūsha toshite hataraku.", "To work as a magazine editor."],
        "驚く": ["おどろく", "Surprise", "To be surprised, to be amazed", "彼の才能に驚く。", "kare no sainō ni odoroku.", "To be surprised at his talent."],
        "岸壁": ["がんぺき", "Quay", "Wharf, quay", "岸壁に船が停泊する。", "ganpeki ni fune ga teihaku suru.", "A ship is docked at the wharf."],
        "一般市民": ["いっぱんしみん", "Average citizen", "General public, ordinary citizen", "一般市民の意見を反映する。", "ippan shimin no iken o han'ei suru.", "To reflect the opinions of the general public."],
        "当たり前": ["あたりまえ", "Of course", "As expected, natural", "成功は当たり前ではない。", "seikō wa atarimae de wa nai.", "Success is not as expected."],
        "事実": ["じじつ", "Fact", "reality", "事実を歪曲する。", "jijitsu o waikyoku suru.", "To distort the facts."]
    },
    "Quiz 3.1": {
        "港": ["みなと", "Port", "Harbor", "横浜港は大きな港です。", "Yokohama minato wa ōkina minato desu.", "Yokohama Port is a large port."],
        "発着場": ["はっちゃくじょう", "Terminal", "Boarding place", "フェリーの発着場。", "ferī no hacchakujō.", "Ferry terminal."],
        "海岸線": ["かいがんせん", "Coastline", "Coastline", "美しい海岸線をドライブする。", "utsukushii kaigansen o doraibu suru.", "To drive along the beautiful coastline."],
        "倉庫": ["そうこ", "Warehouse", "Warehouse", "倉庫に荷物を保管する。", "sōko ni nimotsu o hokan suru.", "To store goods in a warehouse."],
        "埋立地": ["うめたてち", "Reclaimed ground", "Reclaimed land", "埋立地に新しい都市を建設する。", "umetatechi ni atarashii toshi o kensetsu suru.", "To build a new city on reclaimed land."],
        "埠頭": ["ふとう", "Pier", "Pier", "埠頭で船を待つ。", "futō de fune o matsu.", "To wait for a ship at the pier."],
        "私有地": ["しゆうち", "Private property", "Private land", "ここは私有地につき、立ち入り禁止です。", "koko wa shiyūchi ni tsuki, tachiiri kinshi desu.", "This is private land, no entry."],
        "管理地": ["かんりち", "Managed land", "Managed land", "この土地は市の管理地です。", "kono tochi wa shi no kanri-chi desu.", "This land is city-managed land."],
        "出入口": ["でいりぐち", "Entrance", "Entrance", "建物の出入口は正面にあります。", "tatemono no deiriguchi wa shōmen ni arimasu.", "The entrance of the building is in the front."],
        "閉じる": ["とじる", "Close", "To close", "ドアを閉じる。", "doa o tojiru.", "To close the door."]
    },
    "Quiz 3.2": {
        "開く": ["ひらく", "Open", "To open", "新しい市場を開く。", "atarashii ichiba o hiraku.", "To open up a new market."],
        "文藝春秋": ["ぶんげいしゅんじゅう", "Bungeishunju", "Bungeishunju", "文藝春秋を読む。", "Bungeishunjū o yomu.", "To read Bungeishunju."],
        "驚愕": ["きょうがく", "Astonishment", "Astonishment", "驚愕の事実が明らかになる。", "kyōgaku no jijitsu ga akiraka ni naru.", "Shocking facts come to light."],
        "自由": ["じゆう", "Freedom", "Freedom", "表現の自由を求める。", "hyōgen no jiyū o motomeru.", "To seek freedom of expression."],
        "制限": ["せいげん", "Restriction", "Restriction", "速度制限を守る。", "sokudo seigen o mamoru.", "To observe the speed limit."],
        "両輪": ["りょうりん", "Both wheels", "Both wheels", "文化と経済は社会の両輪である。", "bunka to keizai wa shakai no ryōrin de aru.", "Culture and economy are the two wheels of society."],
        "創造する": ["そうぞうする", "Create", "Create", "新しい価値を創造する。", "atarashii kachi o sōzō suru.", "To create new value."],
        "教科": ["きょうか", "Subject", "Subject", "小学校の教科。", "shōgakkō no kyōka.", "Elementary school subjects."],
        "義務教育": ["ぎむきょういく", "Compulsory education", "Compulsory education", "義務教育の重要性。", "gimukyouiku no jūyōsei.", "The importance of compulsory education."],
        "等": ["など", "Etc", "Etc", "趣味は読書、映画鑑賞などです。", "shumi wa dokusho, eiga kanshō nado desu.", "Hobbies are reading, watching movies, etc."]
    },
    "Quiz 4.1": {
        "職業": ["しょくぎょう", "Occupation", "Occupation", "将来の職業について考える。", "shōrai no shokugyō ni tsuite kangaeru.", "To think about future occupation."],
        "優遇する": ["ゆうぐうする", "Favoritism", "Favoritism", "常連客を優遇する。", "jōrenkyaku o yūgū suru.", "To favor regular customers."],
        "配給": ["はいきゅう", "Supply", "Supply", "救援物資を配給する。", "kyūen busshi o haikyū suru.", "To supply relief goods."],
        "バレリーナ": ["バレリーナ", "Ballerina", "Ballerina", "彼女の夢はバレリーナになることだ。", "kanojo wa yume wa barerīna ni naru koto da.", "Her dream is to become a ballerina."],
        "芸術家": ["げいじゅつか", "Artist", "Artist", "彼は有名な芸術家として知られている。", "kare wa yūmeina geijutsuka toshite shirarete iru.", "He is known as a famous artist."],
        "体制的": ["たいせいてき", "Systemic", "Systemic", "体制的な問題点を指摘する。", "taiseiteki na mondaiten o shiteki suru.", "To point out systemic problems."],
        "尊ぶ": ["とうとぶ", "Respect", "Respect", "高齢者を尊ぶ文化。", "kōreisha o tōtobu bunka.", "Culture of respecting the elderly."],
        "情報": ["じょうほう", "Information", "Information", "最新の情報を収集する。", "saishin no jōhō o shūshū suru.", "To collect latest information."],
        "見えざる手": ["みえざるて", "Invisible hand", "Invisible hand", "市場経済は見えざる手に導かれる。", "shijō keizai wa miezaru te ni michibikareru.", "Market economy is led by invisible hand."],
        "真裏": ["まうら", "Opposite", "Opposite", "予想の真裏の結果が出た。", "yosō no maura no kekka ga deta.", "Opposite result from expectation."]
    },
    "Quiz 4.2": {
        "美名": ["びめい", "Good name", "Good name", "美名に惹かれる。", "bimei ni hikareru.", "Attracted by good name."],
        "支配": ["しはい", "Rule", "Rule", "感情に支配される。", "kanjō ni shihai sareru.", "Ruled by emotion."],
        "モラル": ["モラル", "Morality", "Morality", "高いモラルを持つ。", "takai moraru o motsu.", "Have morality."],
        "権力": ["けんりょく", "権力", "Authority", "権力を乱用する。", "kenryoku o ranyō suru.", "Abuse authority."],
        "家父長制度": ["かふちょうせいど", "Patriarchy", "Patriarchy", "家父長制度の影響。", "kafuchō seidō no eikyō.", "Influence of patriarchy."],
        "個人主義": ["こじんしゅぎ", "Individualism", "Individualism", "個人主義的な考え方。", "kojin shugiteki na kangaekata.", "Individualism thinking."],
        "規制": ["きせい", "Regulation", "Regulation", "交通規制が敷かれる。", "kōtsū kisei ga shikareru.", "Traffic regulation enforced."],
        "努力する": ["どりょくする", "Strive", "Strive", "目標に向かって努力する。", "mokuhyō ni mukatte doryoku suru.", "Strive towards goal."],
        "執拗な": ["しつような", "Relentless", "Relentless", "執拗な勧誘に困る。", "shitsuyōna kan'yū ni komaru.", "Troubled by relentless invitation."],
        "感性": ["かんせい", "Sensitivity", "Sensitivity", "自然の美しさに感性を刺激される。", "shizen no utsukushisa ni kansei o shigeki sareru.", "Sensitivity stimulated by nature's beauty."]
    },
    "Quiz 5.1": {
        "役に立たない": ["やくにたたない", "Pointless", "Pointless", "古くなった情報は役に立たない。", "furukunatta jōhō wa yakunitatanai.", "Pointless old information."],
        "迅速な": ["じんそくな", "Rapid", "Rapid", "迅速な対応を心がける。", "jinsokuna taiō o kokorogakeru.", "Keep in mind rapid response."],
        "発見": ["はっけん", "Discovery", "Discovery", "新しい治療法を発見する。", "atarashii chiryōhō o hakken suru.", "Discover new therapy."],
        "科学的": ["かがくてき", "Science-based", "Science-based", "科学的なアプローチで問題解決に取り組む。", "kagakuteki na apurōchi de mondai kaiketsu ni torikumu.", "Work on problem solving with science-based approach."],
        "国策": ["こくさく", "National policy", "National policy", "国の将来を左右する国策。", "kuni no shōrai o sayū suru kokusaku.", "National policy affecting nation's future."],
        "減らす": ["へらす", "Decrease", "Decrease", "コストを減らす努力をする。", "kosuto o herasu doryoku o suru.", "Effort to decrease cost."],
        "時間": ["じかん", "Hour", "Hour", "休憩時間を取る。", "kyūkei jikan o toru.", "Take break hour."],
        "迷わず": ["まよわず", "Decisively", "Decisively", "チャンスを迷わず掴む。", "chansu o mayowazu tsukamu.", "Decisively grab chance."],
        "相談": ["そうだん", "Discuss", "Discuss", "家族と相談して決める。", "kazoku to sōdan shite kimeru.", "Discuss with family and decide."],
        "企画": ["きかく", "Project", "Project", "新しい事業企画を立てる。", "atarashii jigyō kikaku o tateru.", "Make new business project."]
    },
    "Quiz 5.2": {
        "多角的": ["たかくてき", "Diverse", "Diverse", "多角的な分析を行う。", "takakuteki na bunseki o okonau.", "Conduct diverse analysis."],
        "都市風景": ["としふうけい", "Cityscape", "Cityscape", "変わりゆく都市風景。", "kawariyuku toshi fūkei.", "Changing cityscape."],
        "求める": ["もとめる", "Request", "Request", "改善を求める。", "kaizen o motomeru.", "Request improvement."],
        "雑誌": ["ざっし", "Magazine", "Magazine", "ファッション雑誌を読む。", "fasshon zasshi o yomu.", "Read fashion magazine."],
        "小異": ["しょうい", "Slight difference", "Slight difference", "デザインに小異が見られる。", "dezain ni shōi ga mirareru.", "Slight difference in design seen."],
        "往き来": ["いきき", "Traffic", "Traffic", "人と情報が往き来する。", "hito to jōhō ga ikiki suru.", "Traffic of people and information."],
        "大同小異": ["だいどうしょうい", "Similar", "Similar", "結果は大同小異だった。", "kekka wa daidōshōi datta.", "Result was similar."],
        "閉じる": ["とじる", "Shut", "Shut", "目を閉じる。", "me o tojiru.", "Shut eyes."],
        "出入口": ["でいりぐち", "Entrance", "Entrance", "非常口は出入口も兼ねている。", "hijōguchi wa deiriguchi mo kenete iru.", "Emergency exit also serves as entrance."],
        "管理地": ["かんりち", "Managed area", "Managed area", "管理地を巡回する。", "kanri-chi o junkai suru.", "Patrol managed area."]
    },
    "Quiz 6.1": {
        "私有地": ["しゆうち", "Private land", "Private land", "私有地への不法侵入は禁止されています。", "shiyūchi e no fuhō shinnyū wa kinshi sarete imasu.", "Trespassing private land prohibited."],
        "埠頭": ["ふとう", "Wharf", "Wharf", "埠頭で貨物を積み下ろしする。", "futō de kamotsu o tsumioroshi suru.", "Load and unload cargo at wharf."],
        "埋立地": ["うめたてち", "Reclaimed land", "Reclaimed land", "埋立地の造成工事が進む。", "umetatechi no zōsei kōji ga susumu.", "Reclaimed land construction progressing."],
        "倉庫": ["そうこ", "Warehouse", "Warehouse", "倉庫には大量の在庫がある。", "sōko ni wa tairyō no zaiko ga aru.", "Large stock in warehouse."],
        "海岸線": ["かいがんせん", "Coastline", "Coastline", "美しい海岸線を散歩する。", "utsukushii kaigansen o sanpo suru.", "Walk along beautiful coastline."],
        "発着場": ["はっちゃくじょう", "Terminal", "Terminal", "空港の発着場は混雑している。", "kūkō no hacchakujō wa konzatsu shite iru.", "Airport terminal crowded."],
        "港湾施設": ["こうわんしせつ", "Port facilities", "Port facilities", "最新の港湾施設を導入する。", "saishin no kōwanshīsetsu o dōnyū suru.", "Introduce latest port facilities."],
        "工場群": ["こうじょうぐん", "Factory complex", "Factory complex", "夜景が美しい工場群。", "yakei ga utsukushii kōjōgun.", "Factory complex with beautiful night view."],
        "大阪湾岸": ["おおさかわんがん", "Osaka bay area", "Osaka bay area", "大阪湾岸の景色を楽しむ。", "Ōsaka wangan no keshiki o tanoshimu.", "Enjoy Osaka bay area view."],
        "風景": ["ふうけい", "View", "View", "日本の田舎の風景。", "Nihon no inaka no fūkei.", "Japanese rural view."]
    },
    "Quiz 6.2": {
        "事実": ["じじつ", "Fact", "Fact", "事実に基づいた報道。", "jijitsu ni motozuita hōdō.", "Reporting based on fact."],
        "当たり前": ["あたりまえ", "Expected", "Expected", "親切にされるのは当たり前だと思わない。", "shinsetsu ni sareru no wa atarimae da to omowanai.", "Don't think kindness is expected."],
        "一般市民": ["いっぱんしみん", "Ordinary citizen", "Ordinary citizen", "一般市民の生活を守る。", "ippan shimin no seikatsu o mamoru.", "Protect ordinary citizen's life."],
        "岸壁": ["がんぺき", "Embankment", "Embankment", "岸壁から海を眺める。", "ganpeki kara umi o nagameru.", "Look at sea from embankment."],
        "驚く": ["おどろく", "Amazement", "Amazement", "彼の若々しさに驚く。", "kare no wakawakashisa ni odoroku.", "Amazement at his youthfulness."],
        "編集者": ["へんしゅうしゃ", "Editors", "Editors", "ベテランの編集者。", "veteran no henshūsha.", "Veteran editors."],
        "制限": ["せいげん", "Limit", "Limit", "年齢制限がある。", "nenrei seigen ga aru.", "Age limit exists."],
        "自由": ["じゆう", "Liberty", "Liberty", "自由を謳歌する。", "jiyū o ōka suru.", "Enjoy liberty."],
        "驚愕": ["きょうがく", "Appall", "Appall", "驚愕の表情を浮かべる。", "kyōgaku no hyōjō o ukaberu.", "Appalled expression."],
        "文藝春秋": ["ぶんげいしゅんじゅう", "Bungei Shunju", "Bungei Shunju", "文藝春秋に寄稿する。", "Bungeishunjū ni kikō suru.", "Contribute to Bungei Shunju."]
    },
    "Quiz 7.1": {
        "規制": ["きせい", "Control", "Control", "交通規制に従う。", "kōtsū kisei ni shitagau.", "Obey traffic control."],
        "個人主義": ["こじんしゅぎ", "Individualism", "Individualism", "個人主義を尊重する社会。", "kojin shugi o sonchō suru shakai.", "Society respecting individualism."],
        "家父長制度": ["かふちょうせいど", "Patriarchal system", "Patriarchal system", "現代における家父長制度の変容。", "gendai ni okeru kafuchō seidō no hen'yō.", "Patriarchal system change in modern era."],
        "権力": ["けんりょく", "Power", "Power", "権力を手に入れる。", "kenryoku o te ni ireru.", "Obtain power."],
        "モラル": ["モラル", "Morals", "Morals", "高い職業モラルが求められる。", "takai shokugyō moraru ga motomerareru.", "High professional morals required."],
        "支配": ["しはい", "Domination", "Domination", "恐怖で人々を支配する。", "kyōfu de hitobito o shihai suru.", "Domination people with fear."],
        "美名": ["びめい", "Fame", "Fame", "美名を守るために努力する。", "bimei o mamoru tame ni doryoku suru.", "Effort to protect fame."],
        "真裏": ["まうら", "Reverse", "Reverse", "彼の意見は私の考えの真裏にある。", "kare no iken wa watashi no kangae no maura ni aru.", "His opinion reverse of my idea."],
        "見えざる手": ["みえざるて", "Invisible hand", "Invisible hand", "市場経済を見えざる手が支える。", "shijō keizai o miezaru te ga sasaeru.", "Invisible hand supports market economy."],
        "情報": ["じょうほう", "Info", "Info", "正確な情報を基に判断する。", "seikakuna jōhō o moto ni handan suru.", "Judge based on accurate info."]
    },
    "Quiz 7.2": {
        "尊ぶ": ["とうとぶ", "Value", "Value", "人権を尊ぶ。", "jinken o tōtobu.", "Value human rights."],
        "体制的": ["たいせいてき", "System-wide", "System-wide", "体制的な改革が必要だ。", "taiseiteki na kaikaku ga hitsuyō da.", "System-wide reform needed."],
        "芸術家": ["げいじゅつか", "Artist", "Artist", "彼は世界的に有名な芸術家だ。", "kare wa sekai-teki ni yūmeina geijutsuka da.", "He is world-wide famous artist."],
        "バレリーナ": ["バレリーナ", "Ballerina", "Ballerina", "彼女は将来有望なバレリーナだ。", "kanojo wa shōrai yūbōna barerīna da.", "She is promising ballerina."],
        "配給": ["はいきゅう", "Provide", "Provide", "救援物資の配給が始まった。", "kyūen busshi no haikyū ga hajimatta.", "Provide of relief goods started."],
        "優遇する": ["ゆうぐうする", "Treat well", "Treat well", "高齢者を優遇する政策。", "kōreisha o yūgū suru seisaku.", "Policy to treat well elderly."],
        "職業": ["しょくぎょう", "Career", "Career", "天職だと思う職業に出会う。", "tenshoku da to omou shokugyō ni deau.", "Encounter career think is vocation."],
        "等": ["など", "So on", "So on", "趣味は音楽鑑賞、スポーツなど。", "shumi wa ongaku kanshō, supōtsu nado.", "Hobbies so on music, sports."],
        "義務教育": ["ぎむきょういく", "Compulsory education", "Compulsory education", "義務教育を受ける権利。", "gimukyouiku o ukeru kenri.", "Right to receive compulsory education."],
        "教科": ["きょうか", "Course", "Course", "小学校で習う教科。", "shōgakkō de narau kyōka.", "Course learn in elementary school."]
    },
    "Quiz 8.1": {
        "待って":[ "まって", "Wait", "Wait", "次はちょっと待ってください彼を待っている。", "kare o matte iru.", "Waiting for him."],
        
    },
    "Quiz 8.2": {
        "待って":[ "まって", "Wait", "Wait", "次はちょっと待ってください彼を待っている。", "kare o matte iru.", "Waiting for him."],
        "体制的": ["たいせいてき", "System-wide", "System-wide", "体制的な改革が必要だ。", "taiseiteki na kaikaku ga hitsuyō da.", "System-wide reform needed."],
        "芸術家": ["げいじゅつか", "Artist", "Artist", "彼は世界的に有名な芸術家だ。", "kare wa sekai-teki ni yūmeina geijutsuka da.", "He is world-wide famous artist."],
        "バレリーナ": ["バレリーナ", "Ballerina", "Ballerina", "彼女は将来有望なバレリーナだ。", "kanojo wa shōrai yūbōna barerīna da.", "She is promising ballerina."],
        "配給": ["はいきゅう", "Provide", "Provide", "救援物資の配給が始まった。", "kyūen busshi no haikyū ga hajimatta.", "Provide of relief goods started."],
    },

    "Quiz 9.1": {
        "待って":[ "まって", "Wait", "Wait", "次はちょっと待ってください彼を待っている。", "kare o matte iru.", "Waiting for him."],
        "体制的": ["たいせいてき", "System-wide", "System-wide", "体制的な改革が必要だ。", "taiseiteki na kaikaku ga hitsuyō da.", "System-wide reform needed."],
        "芸術家": ["げいじゅつか", "Artist", "Artist", "彼は世界的に有名な芸術家だ。", "kare wa sekai-teki ni yūmeina geijutsuka da.", "He is world-wide famous artist."],
        "バレリーナ": ["バレリーナ", "Ballerina", "Ballerina", "彼女は将来有望なバレリーナだ。", "kanojo wa shōrai yūbōna barerīna da.", "She is promising ballerina."],
        "配給": ["はいきゅう", "Provide", "Provide", "救援物資の配給が始まった。", "kyūen busshi no haikyū ga hajimatta.", "Provide of relief goods started."],
    },
    "Quiz 9.2": {
        "待って":[ "まって", "Wait", "Wait", "次はちょっと待ってください彼を待っている。", "kare o matte iru.", "Waiting for him."],
        "体制的": ["たいせいてき", "System-wide", "System-wide", "体制的な改革が必要だ。", "taiseiteki na kaikaku ga hitsuyō da.", "System-wide reform needed."],
        "芸術家": ["げいじゅつか", "Artist", "Artist", "彼は世界的に有名な芸術家だ。", "kare wa sekai-teki ni yūmeina geijutsuka da.", "He is world-wide famous artist."],
        "バレリーナ": ["バレリーナ", "Ballerina", "Ballerina", "彼女は将来有望なバレリーナだ。", "kanojo wa shōrai yūbōna barerīna da.", "She is promising ballerina."],
        "配給": ["はいきゅう", "Provide", "Provide", "救援物資の配給が始まった。", "kyūen busshi no haikyū ga hajimatta.", "Provide of relief goods started."],
    },
    "Level 1 English": {
        "待って":[ "まって", "Wait", "Wait", "次はちょっと待ってください彼を待っている。", "kare o matte iru.", "Waiting for him."],
        "体制的": ["たいせいてき", "System-wide", "System-wide", "体制的な改革が必要だ。", "taiseiteki na kaikaku ga hitsuyō da.", "System-wide reform needed."],
        "芸術家": ["げいじゅつか", "Artist", "Artist", "彼は世界的に有名な芸術家だ。", "kare wa sekai-teki ni yūmeina geijutsuka da.", "He is world-wide famous artist."],
        "バレリーナ": ["バレリーナ", "Ballerina", "Ballerina", "彼女は将来有望なバレリーナだ。", "kanojo wa shōrai yūbōna barerīna da.", "She is promising ballerina."],
        "配給": ["はいきゅう", "Provide", "Provide", "救援物資の配給が始まった。", "kyūen busshi no haikyū ga hajimatta.", "Provide of relief goods started."],
    },


};


const quizzes = {};

const quizSequence = [
    "Quiz Ex English",
    "Quiz Ex Kanji",
    "Quiz 1.1 English",
    "Quiz 1.1 Kanji",
    "Quiz 1.2 English",
    "Quiz 1.2 Kanji",
    "Quiz 2.1 English",
    "Quiz 2.1 Kanji",
    "Quiz 2.2 English",
    "Quiz 2.2 Kanji",
    "Quiz 3.1 English",
    "Quiz 3.1 Kanji",
    "Quiz 3.2 English",
    "Quiz 3.2 Kanji",
    "Quiz 4.1 English",
    "Quiz 4.1 Kanji",
    "Quiz 4.2 English",
    "Quiz 4.2 Kanji",
    "Quiz 5.1 English",
    "Quiz 5.1 Kanji",
    "Quiz 5.2 English",
    "Quiz 5.2 Kanji",
    "Quiz 6.1 English",
    "Quiz 6.1 Kanji",
    "Quiz 6.2 English",
    "Quiz 6.2 Kanji",
    "Quiz 7.1 English",
    "Quiz 7.1 Kanji",
    "Quiz 7.2 English",
    "Quiz 7.2 Kanji",
    "Quiz 8.1 English", // Added Quiz 8.2, assuming you want to include it. Add others if needed
    "Quiz 8.2 Kanji",
    "Quiz 9.1 English",
    "Quiz 9.2 Kanji",
    "Level 1",
   
];

// Function to create quizzes from word sets (same as before)
function createQuizzes() {
    for (const quizSetName in quizWordSets) {
        const wordSet = quizWordSets[quizSetName];
        const words = Object.keys(wordSet);

        // English Quiz
        const englishQuizQuestions = [];
        words.forEach(word => {
            const meanings = quizWordSets[quizSetName][word];
            const correctEnglishMeaning = meanings[1];

            const options = [correctEnglishMeaning];
            let wrongOptions = [];

            let otherWords = words.filter(w => w !== word);
            let otherWordIndex = 0;
            while (wrongOptions.length < 3 && otherWordIndex < otherWords.length) {
                const otherWordMeanings = quizWordSets[quizSetName][otherWords[otherWordIndex]];
                const otherPrimaryEnglishMeaning = otherWordMeanings[1];

                if (otherPrimaryEnglishMeaning &&
                    otherPrimaryEnglishMeaning !== correctEnglishMeaning &&
                    !options.includes(otherPrimaryEnglishMeaning) &&
                    !wrongOptions.includes(otherPrimaryEnglishMeaning)) {
                    wrongOptions.push(otherPrimaryEnglishMeaning);
                }
                otherWordIndex++;
            }

            while (options.length < 4) {
                if (wrongOptions.length > 0) {
                    options.push(wrongOptions.shift());
                } else {
                    options.push("None of the above");
                }
            }

            shuffleArray(options);
            const correctIndex = options.indexOf(correctEnglishMeaning);

            englishQuizQuestions.push({
                question: `What is '${word}' in English?`,
                options: options,
                correct: correctIndex,
                explanation: `'${word}' (${meanings[0]}) means '${correctEnglishMeaning}' in English.`,
                exampleSentence: meanings[3] || null,
                sentenceTranslation: meanings[4] || null,
                sentenceMeaning: meanings[5] || null,
                japaneseWord: word
            });
        });
        quizzes[`${quizSetName} English`] = englishQuizQuestions.slice(0, 10);

        // Kanji Quiz
        const kanjiQuizQuestions = [];
        words.forEach(word => {
            const meanings = quizWordSets[quizSetName][word];

            const otherWordsForOptions = words.filter(w => w !== word);
            let incorrectOptions = [];
            let optionIndices = [];

            while (incorrectOptions.length < 3 && otherWordsForOptions.length > 0) {
                let randomIndex = Math.floor(Math.random() * otherWordsForOptions.length);
                if (!optionIndices.includes(randomIndex)) {
                    incorrectOptions.push(otherWordsForOptions[randomIndex]);
                    optionIndices.push(randomIndex);
                }
            }

            const options = [word, ...incorrectOptions];
            shuffleArray(options);
            const correctIndex = options.indexOf(word);

            kanjiQuizQuestions.push({
                question: `Which Kanji represents '${meanings[1] || meanings[2] || meanings[0]}' (${meanings[0]})?`,
                options: options,
                correct: correctIndex,
                explanation: `The Kanji '${word}'  represents '${meanings[1] || meanings[2] || meanings[0]}' (${meanings[0]}).`,
                exampleSentence: meanings[3] || null,
                sentenceTranslation: meanings[4] || null,
                sentenceMeaning: meanings[5] || null,
                japaneseWord: word
            });
        });
        quizzes[`${quizSetName} Kanji`] = kanjiQuizQuestions.slice(0, 10);
    }
}

// Utility function to shuffle array (Fisher-Yates Shuffle) (same as before)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

createQuizzes();

let currentQuiz = "Quiz Ex English";
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let nightMode = false;
let optionsElements = [];
let nextButtonContainer = document.getElementById('next-button-container');
let correctAnswersList = [];
let wrongAnswersList = [];
let currentQuizQuestions = []; // To hold the questions for the current quiz

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    sidebar.classList.toggle('show');
    sidebar.classList.toggle('hidden');

    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
}

function switchQuiz(quiz) {
    currentQuiz = quiz;
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('sidebar').classList.add('hidden');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    startQuiz(); // Ensure startQuiz is called to reset and load questions
}

function loadQuestion() {
    const quizTitleElement = document.getElementById('quiz-title');
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const feedbackContainer = document.getElementById('feedback-container');

    quizTitleElement.style.opacity = 0;
    quizTitleElement.style.transform = 'translateY(-20px)';
    questionElement.style.opacity = 0;
    questionElement.style.transform = 'translateY(-10px)';
    optionsContainer.style.opacity = 0;
    nextButtonContainer.classList.add('hidden');

    optionsElements = [];
    optionsContainer.innerHTML = '';
    feedbackContainer.innerHTML = '';
    quizTitleElement.innerText = currentQuiz;

    const q = currentQuizQuestions[currentQuestionIndex]; // Use currentQuizQuestions
    questionElement.innerText = q.question;

    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.classList.add('option');
        div.innerText = opt;
        div.onclick = () => checkAnswer(i);
        optionsContainer.appendChild(div);
        optionsElements.push(div);
        div.style.opacity = 0;
        div.style.transform = 'scale(0.95)';
    });

    setTimeout(() => {
        quizTitleElement.style.animation = 'fadeInSlideDown 0.3s forwards';
        questionElement.style.animation = 'fadeInSlideDown 0.3s forwards 0.2s';
        optionsContainer.style.opacity = 1;
        optionsElements.forEach((option, index) => {
            option.style.animation = `fadeInScaleUp 0.3s forwards ${0.4 + (index * 0.1)}s`;
        });
    }, 10);
}

function checkAnswer(selectedIndex) {
    const q = currentQuizQuestions[currentQuestionIndex]; // Use currentQuizQuestions
    const options = document.querySelectorAll('.option');
    const selectedOption = options[selectedIndex];

    if (selectedIndex === q.correct) {
        selectedOption.classList.add('correct');
        correctAnswers++;
        document.getElementById('correct-count').innerText = correctAnswers;
        showFeedback(true, q.explanation, q.exampleSentence, q.sentenceTranslation, q.sentenceMeaning);
        correctAnswersList.push(q);

    } else {
        selectedOption.classList.add('wrong');
        wrongAnswers++;
        document.getElementById('wrong-count').innerText = wrongAnswers;
        options[q.correct].classList.add('correct');
        showFeedback(false, q.explanation, q.exampleSentence, q.sentenceTranslation, q.sentenceMeaning);
        wrongAnswersList.push(q);
    }

    options.forEach(option => option.classList.add('disabled'));
    nextButtonContainer.classList.remove('hidden');
}

function showFeedback(isCorrect, explanationText, exampleSentence, sentenceTranslation, sentenceMeaning) {
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = '';

    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback');

    if (isCorrect) {
        feedbackDiv.classList.add('correct-feedback');
        feedbackDiv.innerHTML = '<i class="fas fa-check-circle"></i> Correct!';
    } else {
        feedbackDiv.classList.add('wrong-feedback');
        feedbackDiv.innerHTML = '<i class="fas fa-times-circle"></i> Incorrect.';
    }
    feedbackContainer.appendChild(feedbackDiv);
    feedbackDiv.style.opacity = 0;
    feedbackDiv.style.transform = 'translateY(15px)';
    feedbackDiv.style.animation = 'fadeInSlideUp 0.3s forwards 0.2s';

    if (explanationText) {
        const explanationDiv = document.createElement('div');
        explanationDiv.classList.add('explanation');
        explanationDiv.innerText = explanationText;
        feedbackContainer.appendChild(explanationDiv);
        explanationDiv.style.opacity = 0;
        explanationDiv.style.transform = 'translateY(15px)';
        explanationDiv.style.animation = 'fadeInSlideUp 0.3s forwards 0.4s';
    }

    if (exampleSentence) {
        const exampleSentenceDiv = document.createElement('div');
        exampleSentenceDiv.classList.add('example-sentence');
        exampleSentenceDiv.innerText = exampleSentence;
        feedbackContainer.appendChild(exampleSentenceDiv);
        exampleSentenceDiv.style.opacity = 0;
        exampleSentenceDiv.style.transform = 'translateY(15px)';
        exampleSentenceDiv.style.animation = 'fadeInSlideUp 0.3s forwards 0.6s';
        if (nightMode) {
            exampleSentenceDiv.classList.add('night-mode-sentence');
        }
    }

    if (sentenceTranslation) {
        const sentenceTranslationDiv = document.createElement('div');
        sentenceTranslationDiv.classList.add('sentence-translation');
        sentenceTranslationDiv.innerText = sentenceTranslation;
        feedbackContainer.appendChild(sentenceTranslationDiv);
        sentenceTranslationDiv.style.opacity = 0;
        sentenceTranslationDiv.style.transform = 'translateY(15px)';
        sentenceTranslationDiv.style.animation = 'fadeInSlideUp 0.3s forwards 0.8s';
    }
    if (sentenceMeaning) {
        const sentenceMeaningDiv = document.createElement('div');
        sentenceMeaningDiv.classList.add('sentence-meaning');
        sentenceMeaningDiv.innerText = `Translation: ${sentenceMeaning}`;
        feedbackContainer.appendChild(sentenceMeaningDiv);
        sentenceMeaningDiv.style.opacity = 0;
        sentenceMeaningDiv.style.transform = 'translateY(15px)';
        sentenceMeaningDiv.style.animation = 'fadeInSlideUp 1s forwards 1s';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizQuestions.length) { // Use currentQuizQuestions.length
        loadQuestion();
    } else {
        endQuiz();
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    correctAnswersList = [];
    wrongAnswersList = [];
    document.getElementById('correct-count').innerText = correctAnswers;
    document.getElementById('wrong-count').innerText = wrongAnswers;
    hideFeedback();
    hideResultsContainer();
    currentQuizQuestions = quizzes[currentQuiz]; // Reset to full quiz questions
    loadQuestion();
}


function endQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
    showQuizResults();
}


function showQuizResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    const resultsContainer = document.getElementById('quiz-results-container');
    resultsContainer.classList.remove('hidden');
    resultsContainer.style.opacity = 0;
    resultsContainer.style.transform = 'translateY(30px)';
    resultsContainer.style.animation = 'fadeInSlideUp 0.5s forwards';

    populateAnswerLists();
    setupResultButtons();
}


function hideResultsContainer() {
    const resultsContainer = document.getElementById('quiz-results-container');
    if (resultsContainer) {
        resultsContainer.classList.add('hidden');
    }
    document.getElementById('quiz-container').classList.remove('hidden');
}


function populateAnswerLists() {
    const correctListUl = document.getElementById('correct-answers');
    const wrongListUl = document.getElementById('wrong-answers');

    correctListUl.innerHTML = '';
    wrongListUl.innerHTML = '';

    correctAnswersList.forEach(questionObj => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="japanese-word">${questionObj.japaneseWord}</span> - ${questionObj.question}`;
        correctListUl.appendChild(listItem);
    });

    wrongAnswersList.forEach(questionObj => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="japanese-word">${questionObj.japaneseWord}</span> - ${questionObj.question}`;
        wrongListUl.appendChild(listItem);
    });
}


function createWrongWordsQuiz(wrongWords) {
    return wrongWords.map(question => ({ ...question })); // Creates a new array with the wrong questions
}


function startQuizWithWrongWords(wrongWordsQuiz) {
    if (wrongWordsQuiz && wrongWordsQuiz.length > 0) {
        currentQuizQuestions = wrongWordsQuiz; // Set current questions to wrong words only
        currentQuestionIndex = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        correctAnswersList = [];
        wrongAnswersList = [];
        document.getElementById('correct-count').innerText = correctAnswers;
        document.getElementById('wrong-count').innerText = wrongAnswers;
        hideResultsContainer();
        hideFeedback();
        loadQuestion();
    } else {
        alert("No wrong answers available to retake!");
    }
}


function setupResultButtons() {
    const retakeQuizButton = document.getElementById('retake-quiz-button');
    const nextQuizButton = document.getElementById('next-quiz-button');
    const retakeWrongButton = document.getElementById('retake-wrong-button');

    retakeQuizButton.onclick = () => {
        restartQuiz();
        hideResultsContainer();
    };

    nextQuizButton.onclick = () => {
        const currentQuizIndexInSequence = quizSequence.indexOf(currentQuiz);
        if (currentQuizIndexInSequence < quizSequence.length - 1) {
            // There is a next quiz in the sequence
            const nextQuizName = quizSequence[currentQuizIndexInSequence + 1];
            switchQuiz(nextQuizName); // Switch to the next quiz
            startQuiz(); // Start the next quiz
        } else {
            // No next quiz (we are at the end of the sequence)
            alert("You have completed the last quiz in this series!");
            // Optionally, you could loop back to the first quiz, or disable the button, etc.
             // For example, to loop back to the first quiz:
             // switchQuiz(quizSequence[0]);
             // startQuiz();
        }
    };

    retakeWrongButton.onclick = () => {
        if (wrongAnswersList.length > 0) {
            const wrongQuiz = createWrongWordsQuiz(wrongAnswersList);
            startQuizWithWrongWords(wrongQuiz);
        } else {
            alert("No wrong answers to retake!");
        }
    };
}


function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    hideResultsContainer();
    quizContainer.classList.remove('hidden');
    restartQuiz();
}


function toggleNightMode() {
    nightMode = !nightMode;
    document.body.classList.toggle('night-mode', nightMode);
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.toggle('night-mode', nightMode));
    const exampleSentences = document.querySelectorAll('.example-sentence');
    exampleSentences.forEach(sentence => sentence.classList.toggle('night-mode-sentence', nightMode));

    const nightModeButton = document.getElementById('night-mode-button');
    if (nightMode) {
        nightModeButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem('nightMode', 'enabled');
    } else {
        nightModeButton.innerHTML = '<i class="fas fa-moon"></i> Night Mode';
        localStorage.setItem('nightMode', 'disabled');
    }
}

function checkNightModePreference() {
    if (localStorage.getItem('nightMode') === 'enabled') {
        toggleNightMode();
    }
}


function hideFeedback() {
    document.getElementById('feedback-container').innerHTML = '';
    nextButtonContainer.classList.add('hidden');
}


// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    checkNightModePreference();
    startQuiz(); // Call startQuiz to initialize the quiz correctly on page load
    document.querySelectorAll('.quiz-link').forEach(link => {
        link.addEventListener('click', (event) => {
            switchQuiz(event.target.innerText);
            event.preventDefault();
        });
    });
});


function toggleCategory(categoryId) {
    const categoryItems = document.getElementById(categoryId);
    const categoryHeader = document.getElementById('dokkai-words-header');
    const sidebarCategory = categoryHeader.closest('.sidebar-category');

    if (categoryItems.style.display === 'none' || categoryItems.style.display === '') {
        categoryItems.style.display = 'block';
        sidebarCategory.classList.add('open');
    } else {
        categoryItems.style.display = 'none';
        sidebarCategory.classList.remove('open');
    }
}

// function toggleCategory(categoryId) {
//     const categoryItems = document.getElementById(categoryId);
//     const categoryHeader = document.getElementById('level-1-100-header');
//     const sidebarCategory = categoryHeader.closest('.sidebar-category');

//     if (categoryItems.style.display === 'none' || categoryItems.style.display === '') {
//         categoryItems.style.display = 'block';
//         sidebarCategory.classList.add('open');
//     } else {
//         categoryItems.style.display = 'none';
//         sidebarCategory.classList.remove('open');
//     }
// }