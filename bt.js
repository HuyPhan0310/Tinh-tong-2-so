function tong() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    var x = Number(a.value) + Number(b.value);
    alert("Tổng hai số là" + " = " + x);
  }
  function hieu() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    var y = Number(a.value) - Number(b.value);
    alert("Hiệu hai số là" + " = " + y);
  }
  function tich() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    var z = Number(a.value) * Number(b.value);
    alert("Tích hai số là" + " = " + z);
  }
  function thuong() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    var v = Number(a.value) / Number(b.value);
    alert("Thương hai số là" + " = " + v);
  }