$(function () {
  // 配列を作って、それとランダムな数字を掛け合わせると表示できるロジックができる
  //例 からあげを表示したい場合 tori[0] でアクセスできる（配列は０番目からカウント）
  //例 牛丼を表示したい場合 ushi[1] でアクセスできる（配列は０番目からカウント）
  let tori = ["からあげ", "チキン南蛮", "ケンタッキー"];
  let buta = ["とんかつ", "豚汁", "トンテキ"];
  let ushi = ["焼肉", "牛丼", "カレー"];

  // ぶたのボタン
  $(".buta").on("click", function () {
    const b = Math.ceil(Math.random() * 3);
    if (b == 1) {
      view = buta[0];
    }
    if (b == 2) {
      view = buta[1];
    }
    if (b == 3) {
      view = buta[2];
    }
    // 表示処理
    $("#menw1").html(view);
  });

  // とりボタン
  $(".tori").on("click", function () {
    const b = Math.ceil(Math.random() * 3);
    if (b == 1) {
      view = tori[0];
    }
    if (b == 2) {
      view = tori[1];
    }
    if (b == 3) {
      view = tori[2];
    }
    // 表示処理
    $("#menw2").html(view);
  });

  $(".ushi").on("click", function () {
    const b = Math.ceil(Math.random() * 3);
    console.log(b, "bb");

    if (b == 1) {
      view = ushi[0];
    }
    if (b == 2) {
      view = ushi[1];
    }
    if (b == 3) {
      view = ushi[2];
    }
    // 表示処理
    $("#menw3").html(view);
  });
  // この下は消しちゃダメ
});
