function showMyFirstName() {
    return "Anna";
  }
  console.log("1. Etunimi:", showMyFirstName());
  
  
  const showMyFullName = (firstName, lastName) => `${firstName} ${lastName}`;
  console.log("2. Koko nimi:", showMyFullName("Anna", "Esimerkki"));
  
  
  function ageInDogYears(age) {
    return age + (age * 7);
  }
  console.log("3. Ika koiravuosina:", ageInDogYears(5));
  
  
  function convertTemperature(temp, unit) {
    if (unit === 'F') {
      
      return (temp - 32) * 5 / 9;
    } else if (unit === 'C') {
      
      return temp * 9 / 5 + 32;
    } else {
      return "Virheellinen yksikkö, käytä 'C' tai 'F'";
    }
  }
  console.log("4. Lämpötilamuunnos:", convertTemperature(100, 'C'), "°F");
  
  
  const checkPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
  };
  console.log("5. Palindromi?", checkPalindrome("saippuakauppias"));
  
  
  function generateIPAdd() {
    const randOctet = () => Math.floor(Math.random() * 256);
    return `${randOctet()}.${randOctet()}.${randOctet()}.${randOctet()}`;
  }
  console.log("6. IP-osoite:", generateIPAdd());
  
  
  const checkIfSame = (a, b, c) => {
    return a === b || b === c || a === c;
  };
  console.log("7. Onko samoja?:", checkIfSame(5, 54, 54));
  
  
  function checkPlaneFuel(leftWing, rightWing) {
    const gallonToLiter = 3.78541;
    const totalGallons = leftWing + rightWing;
    const totalLiters = totalGallons * gallonToLiter;
  
    const max = Math.max(leftWing, rightWing);
    const min = Math.min(leftWing, rightWing);
    const percentDiff = ((max - min) / max) * 100;
  
    const fuelForFlight = totalGallons - 15; 
    const flightTimeMinutes = Math.floor((fuelForFlight / 9) * 60);
  
    return {
      totalLiters,
      percentDiff,
      flightTimeMinutes
    };
  }
  
  const planeData = checkPlaneFuel(50, 45);
  console.log("8. Lentotiedot:", planeData);
  

  const factorial = function(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };
  
  console.log("9. Faktoriaali (esim. 5!):", factorial(5));
