const {suma}= require('./funcion')

test('Funcion login, suma 2 + 2, debería devolver 4',()=>{
    expect(suma(2, 2)).toBe(4);

} )