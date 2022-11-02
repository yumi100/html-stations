async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return await result
}

function test(arr) {
  sec = 3;
  const userList_map = arr.map(data => {
    data.full_name = data.family_name + ' ' + data.first_name;
    return data
  });
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`wait: ${sec} sec`);
      resolve(userList_map);
    }, sec * 1000);
  });
}

// 参考コード
//function sleep(sec) {
//return new Promise((resolve) => {
//  setTimeout(() => {
//      console.log(`wait: ${sec} sec`);
//      resolve(sec);
//  }, sec * 1000);
//});
//}
//const userList_map = userList.map(data => {
//  data.full_name = data.family_name + ' ' + data.first_name;
//  return data
//})
