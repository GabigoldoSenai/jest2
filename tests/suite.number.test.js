function checkEmail(email){
    const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const isValid = emailPattern.test(email)

    if(isValid) {
        return `${email} is ok`
    }else{
        return `${email} is not ok`
    }
}

test("Verifica se o email é válido", () => {
    expect(checkEmail("test@example.com.nt")).toBe('test@example.com.nt is ok')
    expect('test@example.com.nt').toMatch(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)
})

//Crie um teste que verifique se uma função que recebe email está funcionando corretamente.
//a) Utilize a expressão regular: /^
//b) Utilizar as expressões expect().toBe() e expect().toMatch()