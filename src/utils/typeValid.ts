type TBan<T, E> = T extends E ? never : T;

export default TBan;

/*
    Demo
*/

function testTBan<T>(obj: TBan<T, string>) {
  console.log(obj);
}

testTBan(1);
// error
// testTBan("2123");
