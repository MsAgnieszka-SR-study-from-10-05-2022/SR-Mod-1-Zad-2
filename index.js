const randomNumber = Math.floor(Math.random()*10+1);
const userNumber = Number(prompt('Wytypuj liczbę od 1 do 10.', ''));

if (userNumber >0 && userNumber <= 10 && randomNumber === userNumber) {
    console.log(`Udało Ci się! 😎 Wylosowana liczba to ${randomNumber}.`);
} else if (userNumber <= 0 || userNumber > 10) {
    alert('Podana wartość jest nieprawidłowa.')
} else if (isNaN(userNumber)) {
    alert('Podana wartość nie jest liczbą.')
} else {
    console.log(`Podałeś liczbę ${userNumber}. Wylosowana liczba to ${randomNumber}. Próbuj dalej! 😉`);
};