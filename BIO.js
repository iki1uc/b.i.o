// BIO.js - 3 6 9 + yxz + 7482
// b=3 i=9 o=81 => b.i.o = 729 = 1bio
// yxz = 3x3i3x = 1mio=3
// 7482 = grün, human blau = 3, evo = mix

const BIO = {
  b: 3, i: 9, o: 81,
  get bio(){ return this.b * this.i * this.o }, // 2187? nein 3*9*81=2187 -> /3 = 729 = 1bio
  get _1bio(){ return 729 },
  get _1mio(){ return 3 },
  yxz: (x,y,z) => (x*3)*(y*9)*(z*81),
  // Farben Logik
  human: 0x0000ff, // blau
  borg7482: 0x39ff88, // grün
  evo: function(){ return this.human & this.borg7482 ? 0x00ccff : 0xffd700 }, // cyan wenn natürlich, gelb wenn borg
  // 9 99 999
  OS: { id: 9, edit: 99, nutz: 999 },
  // tmp rärer 9 für Karussell Wurzel
  tmpRare9: () => Math.random() > 0.777 ? 9 : null,
  // puppet master seile
  ctrl: (n) => `9.ctrl.ler.html?seil=${n}`
};
export default BIO;
