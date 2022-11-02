function getData() {
    // これから作ろうとしているもので、JavaScriptでフルネームを生成する必要が出てきました。
    // ただ現状持っている情報では、名前と苗字をそれぞれのみしかありません。
    // そのため、JavaScriptで連結させて生成することにしました。
        const test = [
            { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
            { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
        ];
    return test.map(buildFullName);
}

function buildFullName(data) {
    // Station14の問題はこちらです。想定する答えをここを書いてください。
    // 氏名がわかるようにしつつ、半角スペースで繋いでください。
    // またtest配列のそれぞれのオブジェクトに対して、full_nameのプロパティが追加されるように実装すること

    data.full_name = data.family_name + ' ' + data.first_name;
    //console.log(data)→これで確認
    return data
}

// 出力が想定される答え
// const test = [
//     {id: 1, full_name: '大木 優', first_name: '優', family_name: '大木',affilication: 'TechTrain', is_student: false},
//     {id: 2, full_name: '山田 太郎', first_name: '太郎', family_name: '山田',affilication: 'HogeHoge大学', is_student: true}
// ];
// 
// 他の人の別解
// var name = data.family_name + ' ' + data.first_name;
// let result = new Object();
// result.id = data.id;
// result.full_name = name;
// result.first_name = data.first_name;
// result.family_name = data.family_name;
// result.affilication = data.affilication;
// result.is_student = data.is_student;
//
// return result;   →これだと想定される答え通りの順番になる。結果は変わらないので短い方にした。