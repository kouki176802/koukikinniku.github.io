const DEFAULT_SITE_DATA = {
  banners: [
    {
      id: "mat",
      type: "広告",
      title: "フォーム確認に使えるトレーニングマット",
      description: "自重トレーニングの撮影・練習用に。プッシュアップ、プランク、腹筋種目と相性が良い枠です。",
      cta: "マットを見る",
      url: "#",
      accent: "red"
    },
    {
      id: "dumbbell",
      type: "アフィリエイト",
      title: "可変式ダンベル スターター導線",
      description: "ダンベルプレス、ロウ、サイドレイズなどの記事から自然に誘導できます。",
      cta: "ダンベルを見る",
      url: "#",
      accent: "blue"
    },
    {
      id: "gym",
      type: "アフィリエイト",
      title: "ジム体験・パーソナル体験",
      description: "マシン筋トレ記事に合わせて、ジム体験やパーソナル体験へ誘導する枠です。",
      cta: "体験を探す",
      url: "#",
      accent: "black"
    }
  ],
  exercises: [
    { id: "pushup", name: "プッシュアップ", category: "自重", muscles: "大胸筋・三角筋前部・上腕三頭筋", level: "初級〜中級", sets: "5〜12回 × 2〜3セット", image: "assets/exercises/pushup.png", lead: "胸を鍛える基本種目。腰を落とさず、胸を床へ近づけることで大胸筋に効かせます。", affiliateUrl: "#banners", steps: ["手幅を肩幅より少し広めに決める", "頭からかかとまで一直線にする", "肘を斜め後ろへ曲げながら下ろす", "胸を床へ近づける", "胸で床を押す", "姿勢を保って繰り返す"], ng: ["腰が落ちる", "肘が開きすぎる", "肩がすくむ"] },
    { id: "knee-pushup", name: "膝つきプッシュアップ", category: "自重", muscles: "大胸筋・三角筋前部・上腕三頭筋", level: "初級", sets: "8〜12回 × 2〜3セット", image: "assets/exercises/knee-pushup.png", lead: "腕立て伏せが難しい人向け。膝をついても胸で押す感覚を作れます。", affiliateUrl: "#banners", steps: ["膝を床につく", "手幅を決める", "体を斜め一直線にする", "胸を床へ近づける", "胸で押し上げる", "姿勢を保って繰り返す"], ng: ["腰が落ちる", "肘が開きすぎる", "肩がすくむ"] },
    { id: "squat", name: "スクワット", category: "自重", muscles: "大腿四頭筋・大臀筋・ハムストリング", level: "初級", sets: "10〜15回 × 2〜4セット", image: "assets/exercises/squat.png", lead: "脚とお尻を鍛える基本種目。膝ではなく股関節から下ろします。", affiliateUrl: "#banners", steps: ["足幅を決める", "胸を軽く張る", "お尻を後ろへ引く", "太ももが床に近づく", "足裏で床を押す", "姿勢を戻す"], ng: ["膝が内側に入る", "背中が丸まる", "かかとが浮く"] },
    { id: "lunge", name: "ランジ", category: "自重", muscles: "大腿四頭筋・大臀筋・ハムストリング", level: "初級〜中級", sets: "左右10回 × 2〜3セット", image: "assets/exercises/lunge.png", lead: "前脚で床を押して下半身を鍛える種目。バランス力も鍛えられます。", affiliateUrl: "#banners", steps: ["足を腰幅に立つ", "片脚を前へ踏み出す", "膝を曲げて下ろす", "前脚に体重を乗せる", "床を押して戻る", "反対脚も行う"], ng: ["膝が内側に入る", "上体が倒れすぎる", "前脚のかかとが浮く"] },
    { id: "bulgarian-squat", name: "ブルガリアンスクワット", category: "自重", muscles: "大臀筋・大腿四頭筋・ハムストリング", level: "中級〜上級", sets: "左右8〜12回 × 2〜3セット", image: "assets/exercises/bulgarian-squat.png", lead: "片脚に強く負荷をかける下半身種目。前脚に体重を乗せてお尻に効かせます。", affiliateUrl: "#banners", steps: ["後ろ足を台に乗せる", "前脚の位置を決める", "上体を少し前傾する", "前脚でゆっくり下ろす", "お尻を使って押し上げる", "姿勢を保って繰り返す"], ng: ["膝が内側に入る", "前脚が近すぎる", "反動で上がる"] },
    { id: "hip-lift", name: "ヒップリフト", category: "自重", muscles: "大臀筋・ハムストリング・体幹", level: "初級", sets: "12〜20回 × 2〜3セット", image: "assets/exercises/hip-lift.png", lead: "お尻を鍛える基本種目。腰ではなくお尻で持ち上げます。", affiliateUrl: "#banners", steps: ["仰向けに寝る", "膝を立てる", "かかとをお尻に近づける", "お尻を締めて持ち上げる", "膝から肩まで一直線にする", "ゆっくり下ろす"], ng: ["腰を反りすぎる", "膝が外へ開く", "反動で上げる"] },
    { id: "crunch", name: "クランチ", category: "自重", muscles: "腹直筋・腹斜筋", level: "初級", sets: "10〜15回 × 2〜3セット", image: "assets/exercises/crunch.png", lead: "腹筋を丸める基本種目。起き上がるより腹筋を縮める意識が大切です。", affiliateUrl: "#banners", steps: ["仰向けに寝る", "膝を立てる", "手を頭の横に添える", "息を吐きながら肩を浮かせる", "腹筋を丸めて止める", "ゆっくり戻す"], ng: ["首を引っ張る", "反動で起きる", "腰が浮く"] },
    { id: "leg-raise", name: "レッグレイズ", category: "自重", muscles: "腹直筋下部・腸腰筋・体幹", level: "初級〜中級", sets: "8〜15回 × 2〜3セット", image: "assets/exercises/leg-raise.png", lead: "下腹部を狙う種目。腰を反らず、下腹で脚を動かします。", affiliateUrl: "#banners", steps: ["仰向けに寝る", "手を体の横に置く", "脚をそろえて上げる", "下腹を意識して下ろす", "床につく直前で止める", "反動を使わず繰り返す"], ng: ["腰が反る", "脚を勢いで振る", "首に力が入る"] },
    { id: "plank", name: "プランク", category: "自重", muscles: "腹横筋・腹直筋・体幹", level: "初級", sets: "20〜45秒 × 2〜3セット", image: "assets/exercises/plank.png", lead: "体幹を固める基本種目。長く耐えるより一直線を保ちます。", affiliateUrl: "#banners", steps: ["肘を肩の下に置く", "つま先を立てる", "頭からかかとを一直線にする", "お腹を薄く固める", "呼吸を止めずに保つ", "姿勢が崩れる前に休む"], ng: ["腰が落ちる", "お尻が上がりすぎる", "肩がすくむ"] },
    { id: "pull-up", name: "懸垂", category: "自重", muscles: "広背筋・僧帽筋・上腕二頭筋", level: "中級〜上級", sets: "3〜10回 × 2〜4セット", image: "assets/exercises/pull-up.png", lead: "背中を広くする自重種目。腕で引かず、肘を下げる意識で行います。", affiliateUrl: "#banners", steps: ["バーを肩幅より広く握る", "肩を下げてぶら下がる", "胸を軽く張る", "肘を腰へ近づける", "顎をバーに近づける", "ゆっくり下ろす"], ng: ["反動で上がる", "肩がすくむ", "首だけを上げる"] },
    { id: "dumbbell-press", name: "ダンベルプレス", category: "ダンベル", muscles: "大胸筋・三角筋前部・上腕三頭筋", level: "初級〜中級", sets: "8〜12回 × 3セット", image: "assets/exercises/dumbbell-press.png", lead: "胸を厚くしたい人向けの基本種目。肩ではなく胸で押す軌道を作ります。", affiliateUrl: "#banners", steps: ["ダンベルを膝に乗せる", "ベンチに仰向けになる", "胸の横に構える", "斜め上に押す", "上で止める", "ゆっくり下ろす"], ng: ["肩が前に出る", "手首が反る", "重すぎて軌道がぶれる"] },
    { id: "dumbbell-fly", name: "ダンベルフライ", category: "ダンベル", muscles: "大胸筋", level: "中級", sets: "8〜12回 × 3セット", image: "assets/exercises/dumbbell-fly.png", lead: "胸を開いて閉じる種目。押すよりも胸の伸び縮みを感じます。", affiliateUrl: "#banners", steps: ["ベンチに仰向けになる", "胸の上で構える", "肘を少し曲げる", "胸を開きながら下ろす", "胸で弧を描いて戻す", "上で胸を寄せる"], ng: ["肘を伸ばしすぎる", "下ろしすぎる", "肩が前に出る"] },
    { id: "onehand-row", name: "ワンハンドダンベルロウ", category: "ダンベル", muscles: "広背筋・僧帽筋・上腕二頭筋", level: "初級〜中級", sets: "左右10〜12回 × 3セット", image: "assets/exercises/onehand-row.png", lead: "背中を鍛える基本種目。手ではなく肘を腰へ引きます。", affiliateUrl: "#banners", steps: ["片手と片膝をベンチに置く", "背中をまっすぐ保つ", "ダンベルを真下に下ろす", "肘を腰へ引く", "背中を収縮させる", "ゆっくり戻す"], ng: ["体をひねる", "腕だけで引く", "背中が丸まる"] },
    { id: "dumbbell-shoulder-press", name: "ダンベルショルダープレス", category: "ダンベル", muscles: "三角筋・上腕三頭筋・僧帽筋", level: "初級〜中級", sets: "8〜12回 × 3セット", image: "assets/exercises/dumbbell-shoulder-press.png", lead: "肩を鍛えるプレス種目。腰を反らず、肩で押します。", affiliateUrl: "#banners", steps: ["ベンチに座る", "ダンベルを肩の横に構える", "肘と手首を縦にそろえる", "頭上へ押し上げる", "上で止める", "ゆっくり下ろす"], ng: ["腰を反りすぎる", "肩がすくむ", "ダンベルが前後にぶれる"] },
    { id: "side-raise", name: "サイドレイズ", category: "ダンベル", muscles: "三角筋中部", level: "初級", sets: "12〜15回 × 2〜4セット", image: "assets/exercises/side-raise.png", lead: "肩の横幅を作る種目。手ではなく肘から上げます。", affiliateUrl: "#banners", steps: ["軽めのダンベルを持つ", "体の横に構える", "肘を少し曲げる", "肘から横へ上げる", "肩の高さで止める", "ゆっくり下ろす"], ng: ["反動で振り上げる", "肩がすくむ", "重すぎて肘が曲がる"] },
    { id: "dumbbell-curl", name: "ダンベルカール", category: "ダンベル", muscles: "上腕二頭筋・上腕筋・前腕", level: "初級", sets: "10〜15回 × 2〜4セット", image: "assets/exercises/dumbbell-curl.png", lead: "腕を鍛える基本種目。肘を固定して二頭筋で曲げます。", affiliateUrl: "#banners", steps: ["ダンベルを持って立つ", "肘を体の横に固定する", "手のひらを前に向ける", "反動なしで曲げる", "上で二頭筋を縮める", "ゆっくり下ろす"], ng: ["肘が前に出る", "体を反らせる", "反動で振る"] },
    { id: "triceps-kickback", name: "トライセプスキックバック", category: "ダンベル", muscles: "上腕三頭筋", level: "初級", sets: "10〜15回 × 2〜3セット", image: "assets/exercises/triceps-kickback.png", lead: "二の腕の裏を鍛える種目。肘を固定して後ろへ伸ばします。", affiliateUrl: "#banners", steps: ["片手をベンチにつく", "上体を前傾する", "肘を高い位置で固定する", "前腕を後ろへ伸ばす", "上で三頭筋を締める", "ゆっくり戻す"], ng: ["肘が下がる", "反動で振る", "背中が丸まる"] },
    { id: "goblet-squat", name: "ゴブレットスクワット", category: "ダンベル", muscles: "大腿四頭筋・大臀筋・内転筋", level: "初級", sets: "10〜15回 × 3セット", image: "assets/exercises/goblet-squat.png", lead: "ダンベルを胸の前で持つスクワット。深くしゃがみやすい種目です。", affiliateUrl: "#banners", steps: ["ダンベルを胸の前で持つ", "足幅を決める", "胸を張る", "股関節からしゃがむ", "肘を膝の内側へ入れる", "足裏で押して立つ"], ng: ["背中が丸まる", "膝が内に入る", "かかとが浮く"] },
    { id: "dumbbell-rdl", name: "ダンベルルーマニアンデッドリフト", category: "ダンベル", muscles: "ハムストリング・大臀筋・脊柱起立筋", level: "中級", sets: "8〜12回 × 3セット", image: "assets/exercises/dumbbell-rdl.png", lead: "もも裏とお尻を鍛える種目。膝ではなく股関節を折ります。", affiliateUrl: "#banners", steps: ["ダンベルを体の前で持つ", "膝を軽く曲げる", "お尻を後ろへ引く", "背中をまっすぐ保つ", "もも裏が伸びる位置で止める", "お尻を締めて戻る"], ng: ["背中が丸まる", "膝を曲げすぎる", "ダンベルが体から離れる"] },
    { id: "dumbbell-russian-twist", name: "ダンベルロシアンツイスト", category: "ダンベル", muscles: "腹斜筋・腹直筋・体幹", level: "中級", sets: "左右10〜20回 × 2〜3セット", image: "assets/exercises/dumbbell-russian-twist.png", lead: "体幹をひねる腹筋種目。腕だけでなく体幹から動かします。", affiliateUrl: "#banners", steps: ["床に座る", "ダンベルを胸の前で持つ", "上体を少し後ろへ倒す", "体幹を右へひねる", "中央へ戻す", "左へひねる"], ng: ["腕だけで振る", "背中が丸まる", "速く動かしすぎる"] },
    { id: "chest-press", name: "チェストプレス", category: "マシン", muscles: "大胸筋・三角筋前部・上腕三頭筋", level: "初級", sets: "10〜12回 × 3セット", image: "assets/exercises/chest-press.png", lead: "胸を鍛えるマシン種目。シートを合わせて胸で押します。", affiliateUrl: "#banners", steps: ["シートの高さを合わせる", "胸を張って座る", "グリップを胸の横で握る", "前へ押す", "胸を締めて止める", "ゆっくり戻す"], ng: ["シートが高すぎる", "肩が前に出る", "勢いよく戻す"] },
    { id: "pec-fly", name: "ペックフライ", category: "マシン", muscles: "大胸筋", level: "初級", sets: "10〜15回 × 3セット", image: "assets/exercises/pec-fly.png", lead: "胸を寄せるマシン種目。腕ではなく胸で閉じます。", affiliateUrl: "#banners", steps: ["シートを調整する", "肘をパッドに当てる", "胸を軽く張る", "胸で腕を閉じる", "中央で止める", "ゆっくり開く"], ng: ["肩がすくむ", "腕だけで閉じる", "戻しすぎて肩が痛む"] },
    { id: "lat-pulldown", name: "ラットプルダウン", category: "マシン", muscles: "広背筋・僧帽筋・上腕二頭筋", level: "初級", sets: "10〜12回 × 3セット", image: "assets/exercises/lat-pulldown.png", lead: "背中を広くしたい人向け。手で引かず、肘を下げる意識で行います。", affiliateUrl: "#banners", steps: ["太ももパッドを合わせる", "バーを広めに握る", "胸を軽く張る", "肘を下へ落とす", "鎖骨付近まで引く", "ゆっくり戻す"], ng: ["体を反らせすぎる", "首の後ろへ引く", "腕だけで引く"] },
    { id: "seated-row", name: "シーテッドロウ", category: "マシン", muscles: "広背筋・僧帽筋・菱形筋", level: "初級", sets: "10〜12回 × 3セット", image: "assets/exercises/seated-row.png", lead: "背中の厚みを作る種目。胸を張り、肘を後ろへ引きます。", affiliateUrl: "#banners", steps: ["シートに座る", "足を固定する", "胸を張って握る", "肘を後ろへ引く", "肩甲骨を寄せる", "ゆっくり戻す"], ng: ["背中が丸まる", "腕だけで引く", "体を後ろへ倒しすぎる"] },
    { id: "machine-shoulder-press", name: "ショルダープレスマシン", category: "マシン", muscles: "三角筋・上腕三頭筋", level: "初級", sets: "10〜12回 × 3セット", image: "assets/exercises/machine-shoulder-press.png", lead: "肩を鍛えるマシン種目。肩をすくめず真上へ押します。", affiliateUrl: "#banners", steps: ["シートを調整する", "グリップを肩の横で握る", "胸を軽く張る", "頭上へ押す", "上で止める", "ゆっくり戻す"], ng: ["腰を反る", "肩がすくむ", "肘が後ろへ流れる"] },
    { id: "leg-press", name: "レッグプレス", category: "マシン", muscles: "大腿四頭筋・大臀筋・ハムストリング", level: "初級", sets: "10〜15回 × 3セット", image: "assets/exercises/leg-press.png", lead: "下半身を鍛えるマシン種目。膝を守り、足裏で押します。", affiliateUrl: "#banners", steps: ["シートに深く座る", "足をプレートに置く", "膝とつま先をそろえる", "膝を曲げて下ろす", "足裏で押す", "安全バーを戻す"], ng: ["膝が内側に入る", "腰が浮く", "膝を伸ばし切る"] },
    { id: "leg-extension", name: "レッグエクステンション", category: "マシン", muscles: "大腿四頭筋", level: "初級", sets: "10〜15回 × 3セット", image: "assets/exercises/leg-extension.png", lead: "太もも前を狙うマシン種目。膝を伸ばして大腿四頭筋に効かせます。", affiliateUrl: "#banners", steps: ["シートを調整する", "足首パッドを合わせる", "背中をパッドにつける", "膝を伸ばす", "上で太ももを締める", "ゆっくり下ろす"], ng: ["勢いよく蹴る", "腰が浮く", "膝をロックしすぎる"] },
    { id: "leg-curl", name: "レッグカール", category: "マシン", muscles: "ハムストリング", level: "初級", sets: "10〜15回 × 3セット", image: "assets/exercises/leg-curl.png", lead: "もも裏を鍛えるマシン種目。ハムストリングで膝を曲げます。", affiliateUrl: "#banners", steps: ["シートを調整する", "足首パッドを合わせる", "太ももを固定する", "膝を曲げる", "もも裏を締める", "ゆっくり戻す"], ng: ["腰が浮く", "反動で曲げる", "戻しが速すぎる"] },
    { id: "abdominal-crunch-machine", name: "アブドミナルクランチマシン", category: "マシン", muscles: "腹直筋", level: "初級", sets: "10〜15回 × 3セット", image: "assets/exercises/abdominal-crunch-machine.png", lead: "腹筋を狙うマシン種目。体を倒さず腹筋を丸めます。", affiliateUrl: "#banners", steps: ["シートを調整する", "パッドを胸に当てる", "足を固定する", "背中を丸める", "腹筋を縮めて止める", "ゆっくり戻す"], ng: ["腕で引く", "腰から倒す", "反動で戻る"] },
    { id: "cable-pressdown", name: "ケーブルプレスダウン", category: "マシン", muscles: "上腕三頭筋", level: "初級", sets: "10〜15回 × 3セット", image: "assets/exercises/cable-pressdown.png", lead: "上腕三頭筋を鍛えるケーブル種目。肘を固定して下へ押します。", affiliateUrl: "#banners", steps: ["ケーブルの高さを合わせる", "バーまたはロープを握る", "肘を体の横に固定する", "下へ押し切る", "三頭筋を締める", "ゆっくり戻す"], ng: ["肘が前後に動く", "体重をかけすぎる", "戻しが速い"] }
  ]
};

const PUBLISHED_V2_IMAGES = new Set([
  "archer-pushup",
  "back-extension",
  "bench-dips",
  "bulgarian-squat",
  "chin-up",
  "crunch",
  "decline-pushup",
  "diamond-pushup",
  "dumbbell-fly",
  "dumbbell-press",
  "dumbbell-pullover",
  "hip-lift",
  "incline-dumbbell-fly",
  "incline-dumbbell-press",
  "incline-pushup",
  "inverted-row",
  "knee-pushup",
  "leg-raise",
  "lunge",
  "narrow-pushup",
  "pike-pushup",
  "plank",
  "plyo-pushup",
  "prone-t-raise",
  "prone-y-raise",
  "pull-up",
  "pushup",
  "reverse-snow-angel",
  "side-plank",
  "spiderman-pushup",
  "squat",
  "superman",
  "typewriter-pushup",
  "wall-pushup",
  "wide-pushup"
]);

const EXTRA_EXERCISES = [
  { id: "wall-pushup", name: "壁プッシュアップ", category: "自重", muscles: "大胸筋・三角筋前部・上腕三頭筋", level: "初級", sets: "10〜15回 × 2〜3セット", lead: "壁を使って胸で押す感覚を覚える初心者向け種目です。", steps: ["壁の前に立つ", "手を胸の高さにつく", "足を後ろに下げる", "体を一直線にする", "肘を曲げて胸を壁へ近づける", "壁を押して戻る"], ng: ["腰が落ちる", "手が高すぎる", "肘が外へ開く"] },
  { id: "wide-pushup", name: "ワイドプッシュアップ", category: "自重", muscles: "大胸筋・三角筋前部", level: "中級", sets: "6〜12回 × 2〜3セット", lead: "手幅を広げて胸を大きく使うプッシュアップです。", steps: ["肩幅より広く手を置く", "指先をやや外へ向ける", "体を一直線にする", "胸を開きながら下ろす", "床の手前で止める", "胸で押して戻る"], ng: ["手幅が広すぎる", "肘が真横に開く", "腰が落ちる"] },
  { id: "narrow-pushup", name: "ナロープッシュアップ", category: "自重", muscles: "上腕三頭筋・大胸筋内側", level: "中級", sets: "6〜12回 × 2〜3セット", lead: "手幅を狭くして腕の裏を狙う種目です。", steps: ["肩幅より狭く手を置く", "手首を肩の下にそろえる", "脇を軽く締める", "肘を後ろへ引くように下ろす", "胸を床へ近づける", "上腕三頭筋で押して戻る"], ng: ["手が近すぎる", "肘が横へ開く", "腰が落ちる"] },
  { id: "diamond-pushup", name: "ダイヤモンドプッシュアップ", category: "自重", muscles: "上腕三頭筋・大胸筋内側", level: "中級〜上級", sets: "5〜10回 × 2〜3セット", lead: "手でひし形を作り、腕の裏へ強く効かせます。", steps: ["親指と人差し指でひし形を作る", "手を胸の下に置く", "脇を締める", "肘を後ろへ曲げる", "胸を手の近くへ下ろす", "腕の裏で押して戻る"], ng: ["手首が潰れる", "肘が外へ開く", "腰が落ちる"] },
  { id: "decline-pushup", name: "デクラインプッシュアップ", category: "自重", muscles: "大胸筋上部・三角筋前部", level: "中級", sets: "6〜12回 × 2〜3セット", lead: "足を高くして上部胸筋を狙うプッシュアップです。", steps: ["安定した台に足を乗せる", "手を胸の下に置く", "体を一直線にする", "胸を床へ下ろす", "肩をすくめず止める", "胸で床を押して戻る"], ng: ["台が高すぎる", "肩がすくむ", "腰が落ちる"] },
  { id: "incline-pushup", name: "インクラインプッシュアップ", category: "自重", muscles: "大胸筋・上腕三頭筋", level: "初級", sets: "8〜15回 × 2〜3セット", lead: "手を高くして負荷を下げ、安全に胸を鍛えます。", steps: ["安定した台に手を置く", "手を胸の下にそろえる", "足を後ろへ下げる", "胸を台へ近づける", "台の手前で止める", "台を押して戻る"], ng: ["台が高すぎる", "腰が落ちる", "肘が外へ開く"] },
  { id: "archer-pushup", name: "アーチャープッシュアップ", category: "自重", muscles: "大胸筋・上腕三頭筋", level: "上級", sets: "左右4〜8回 × 2セット", lead: "片側に体重を乗せて胸を強く使う上級種目です。", steps: ["手幅を広く置く", "片腕を伸ばす", "曲げる側へ体重を寄せる", "胸を片側へ下ろす", "片側の胸で止める", "押し戻して反対側へ備える"], ng: ["普通の腕立てになる", "肩に体重が乗りすぎる", "腰がねじれる"] },
  { id: "typewriter-pushup", name: "タイプライタープッシュアップ", category: "自重", muscles: "大胸筋・肩・上腕三頭筋", level: "上級", sets: "左右3〜6回 × 2セット", lead: "低い姿勢のまま左右へ移動して胸を追い込みます。", steps: ["手幅を広く構える", "体を下げて片側へ寄る", "低い姿勢で中央へ戻る", "反対側へ横移動する", "片側の胸で止める", "押し戻して次へ入る"], ng: ["上下運動になる", "腰がねじれる", "肘が開きすぎる"] },
  { id: "spiderman-pushup", name: "スパイダーマンプッシュアップ", category: "自重", muscles: "大胸筋・腹斜筋・体幹", level: "上級", sets: "左右4〜8回 × 2セット", lead: "膝を肘へ寄せて、胸と体幹を同時に鍛えます。", steps: ["腕立て姿勢を作る", "下ろしながら片膝を肘へ寄せる", "胸を床へ近づける", "膝を戻しながら押し上げる", "反対側も行う", "左右交互に繰り返す"], ng: ["腰が大きくねじれる", "胸が下がらない", "肘が外へ開く"] },
  { id: "plyo-pushup", name: "プライオプッシュアップ", category: "自重", muscles: "大胸筋・上腕三頭筋・瞬発力", level: "上級", sets: "3〜8回 × 2〜3セット", lead: "床を強く押して瞬発力を鍛える種目です。", steps: ["腕立て姿勢を作る", "胸を床へ近づける", "爆発的に床を押す", "両手を床から少し離す", "肘を柔らかく着地する", "体を一直線に戻す"], ng: ["腰が落ちたまま跳ねる", "着地で肘を突っ張る", "反動だけで行う"] },
  { id: "superman", name: "スーパーマン", category: "自重", muscles: "脊柱起立筋・広背筋・大臀筋", level: "初級", sets: "8〜12回 × 2〜3セット", lead: "背中を反らせすぎず、手足を少し浮かせる背面種目です。", steps: ["うつ伏せで手足を伸ばす", "首を長く保つ", "お腹に軽く力を入れる", "胸と脚を少し浮かせる", "腰を反らせすぎず止める", "ゆっくり床へ戻す"], ng: ["首を反らせすぎる", "腰だけを強く反る", "勢いで振り上げる"] },
  { id: "reverse-snow-angel", name: "リバーススノーエンジェル", category: "自重", muscles: "僧帽筋下部・菱形筋・三角筋後部", level: "初級", sets: "8〜12回 × 2〜3セット", lead: "床すれすれで腕を回し、肩甲骨を動かします。", steps: ["うつ伏せで腕を前に伸ばす", "胸を少し浮かせる", "腕を横へ開く", "肩甲骨を寄せながら後ろへ回す", "手を腰の横へ近づける", "同じ軌道で戻す"], ng: ["腰を反らせすぎる", "腕を高く振る", "肩がすくむ"] },
  { id: "back-extension", name: "バックエクステンション", category: "自重", muscles: "脊柱起立筋・大臀筋", level: "初級", sets: "8〜12回 × 2〜3セット", lead: "腰だけでなく、背中全体で胸を少し起こします。", steps: ["うつ伏せで手を耳の横に置く", "首を長く保つ", "お腹を軽く締める", "胸を少し浮かせる", "背中全体で止める", "ゆっくり床へ戻す"], ng: ["腰だけを反る", "首を反らせる", "勢いで上げる"] },
  { id: "prone-y-raise", name: "プローンYレイズ", category: "自重", muscles: "僧帽筋下部・肩甲骨周辺", level: "初級", sets: "8〜12回 × 2〜3セット", lead: "腕をY字に上げて肩甲骨を安定させます。", steps: ["うつ伏せで腕をY字に伸ばす", "親指を上へ向ける", "首を長く保つ", "腕だけを少し浮かせる", "肩甲骨を下げて止める", "ゆっくり床へ戻す"], ng: ["肩がすくむ", "腰を反らせる", "腕を高く振る"] },
  { id: "prone-t-raise", name: "プローンTレイズ", category: "自重", muscles: "三角筋後部・菱形筋・僧帽筋中部", level: "初級", sets: "8〜12回 × 2〜3セット", lead: "腕をT字に開き、肩甲骨を寄せる種目です。", steps: ["うつ伏せで腕を横に広げる", "親指を上か外へ向ける", "首と背中を長く保つ", "腕を少し浮かせる", "肩甲骨を寄せて止める", "ゆっくり戻す"], ng: ["肩がすくむ", "腰を反らせすぎる", "反動で腕を振る"] },
  { id: "inverted-row", name: "インバーテッドロウ", category: "自重", muscles: "広背筋・僧帽筋・菱形筋", level: "中級", sets: "6〜12回 × 2〜3セット", lead: "低いバーに胸を近づけ、背中で引く自重ロウです。", steps: ["低いバーの下に入る", "肩幅でバーを握る", "体を一直線にする", "胸をバーへ引き上げる", "肩甲骨を寄せて止める", "ゆっくり下ろす"], ng: ["腰が落ちる", "首だけ近づける", "肘が開きすぎる"] },
  { id: "chin-up", name: "チンアップ", category: "自重", muscles: "広背筋・上腕二頭筋・僧帽筋", level: "中級〜上級", sets: "3〜10回 × 2〜4セット", lead: "逆手で握り、背中と腕で引き上げる懸垂です。", steps: ["逆手で肩幅に握る", "肩を下げてぶら下がる", "胸を軽く張る", "肘を下へ引く", "顎をバーへ近づける", "ゆっくり下ろす"], ng: ["脚を振る", "肩がすくむ", "腕だけで引く"] },
  { id: "pike-pushup", name: "パイクプッシュアップ", category: "自重", muscles: "三角筋・上腕三頭筋", level: "中級", sets: "5〜10回 × 2〜3セット", lead: "腰を高くして肩で床を押す種目です。", steps: ["手を肩幅に置く", "お尻を高く上げる", "頭を手の間へ向ける", "肘を曲げて下ろす", "肩に負荷を感じる", "床を押して戻る"], ng: ["背中が丸まりすぎる", "頭が前へ出る", "肘が外へ開く"] },
  { id: "bench-dips", name: "ベンチディップス", category: "自重", muscles: "上腕三頭筋・三角筋前部", level: "初級〜中級", sets: "8〜12回 × 2〜3セット", lead: "ベンチを使って二の腕の裏を鍛えます。", steps: ["ベンチの端に手を置く", "足を前へ出す", "肩を下げる", "肘を後ろへ曲げる", "90度手前で止める", "手のひらで押して戻る"], ng: ["肩がすくむ", "体が離れすぎる", "肘が横へ開く"] },
  { id: "side-plank", name: "サイドプランク", category: "自重", muscles: "腹斜筋・腹横筋・中殿筋", level: "初級〜中級", sets: "左右20〜40秒 × 2〜3セット", lead: "横向きで一直線を保ち、脇腹を固めます。", steps: ["横向きで肘を肩の下に置く", "足を重ねる", "腰を床から浮かせる", "頭から足まで一直線にする", "脇腹とお尻に力を入れる", "ゆっくり床へ戻す"], ng: ["腰が落ちる", "肩がすくむ", "体がねじれる"] },
  { id: "incline-dumbbell-press", name: "インクラインダンベルプレス", category: "ダンベル", muscles: "大胸筋上部・三角筋前部・上腕三頭筋", level: "中級", sets: "8〜12回 × 3セット", lead: "ベンチを傾けて上部胸筋を狙います。", steps: ["ベンチを30〜45度にする", "胸上部の横で構える", "肩甲骨を寄せる", "斜め上へ押す", "上で胸を締める", "ゆっくり戻す"], ng: ["角度が高すぎる", "肩がすくむ", "肘が開きすぎる"] },
  { id: "incline-dumbbell-fly", name: "インクラインダンベルフライ", category: "ダンベル", muscles: "大胸筋上部・三角筋前部", level: "中級", sets: "8〜12回 × 3セット", lead: "斜めベンチで胸上部を開いて閉じます。", steps: ["ベンチを30〜45度にする", "胸上部の上で構える", "肘を軽く曲げる", "胸を開くように下ろす", "痛くない範囲で止める", "弧を描いて戻す"], ng: ["肘を伸ばし切る", "下ろしすぎる", "肩がすくむ"] },
  { id: "dumbbell-pullover", name: "ダンベルプルオーバー", category: "ダンベル", muscles: "大胸筋・広背筋・前鋸筋", level: "中級", sets: "8〜12回 × 3セット", lead: "胸と背中を意識して、ダンベルを頭上へ下ろします。", steps: ["ベンチに仰向けになる", "胸の上で両手で持つ", "肘を軽く曲げる", "頭上へ下ろす", "伸びる位置で止める", "胸の上へ戻す"], ng: ["腰が反る", "肘を動かしすぎる", "下ろしすぎる"] }
].map((exercise) => ({
  image: `assets/exercises-v2/${exercise.id}.png`,
  affiliateUrl: "#banners",
  ...exercise
}));

function normalizeSiteData(data) {
  const normalized = structuredClone(data);
  const affiliateConfig = window.KINTORE_AFFILIATE_CONFIG || {};
  const bannerOverrides = new Map((affiliateConfig.banners || []).map((banner) => [banner.id, banner]));
  const categoryLinks = affiliateConfig.categoryLinks || {};
  const exerciseLinks = affiliateConfig.exerciseLinks || {};

  normalized.banners = normalized.banners.map((banner) => ({
    ...banner,
    ...bannerOverrides.get(banner.id)
  }));

  const extrasById = new Map(EXTRA_EXERCISES.map((exercise) => [exercise.id, exercise]));
  normalized.exercises = normalized.exercises.map((exercise) => ({
    ...extrasById.get(exercise.id),
    ...exercise,
    image: PUBLISHED_V2_IMAGES.has(exercise.id) ? `assets/exercises-v2/${exercise.id}.png` : exercise.image,
    affiliateUrl: exerciseLinks[exercise.id] || categoryLinks[exercise.category] || exercise.affiliateUrl
  }));

  EXTRA_EXERCISES.forEach((exercise) => {
    if (!normalized.exercises.some((item) => item.id === exercise.id)) {
      normalized.exercises.push({
        ...exercise,
        affiliateUrl: exerciseLinks[exercise.id] || categoryLinks[exercise.category] || exercise.affiliateUrl
      });
    }
  });

  return normalized;
}

function loadSiteData() {
  const saved = localStorage.getItem("kintoreSiteData");
  if (!saved) return normalizeSiteData(DEFAULT_SITE_DATA);
  try {
    return normalizeSiteData(JSON.parse(saved));
  } catch {
    return normalizeSiteData(DEFAULT_SITE_DATA);
  }
}

function saveSiteData(data) {
  localStorage.setItem("kintoreSiteData", JSON.stringify(data));
}
