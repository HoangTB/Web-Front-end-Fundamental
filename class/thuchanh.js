function summit(){
    const firtname = document.getElementById('firtname').value ;
    const lastname = document.getElementById('lastname').value ;
    console.log('Full Name:',  lastname + ' ' + firtname);
    const streetaddress = document.getElementById('streetaddress').value;
    console.log('Street Address:', streetaddress);
    const addressline2 = document.getElementById('addressline2').value;
    console.log('Addressline 2:', addressline2);
    const city = document.getElementById('city').value;
    console.log('City:', city);
    const state = document.getElementById('state').value;
    console.log('State/Region/Province:', state);
    const postal = document.getElementById('postal').value;
    console.log('Postal/Zip Code:', postal);
    const country = document.getElementById('country').value;
    console.log('Country:', country);

    const yes = document.getElementById('yes').value;
    const no = document.getElementById('no').value;
    console.log('What more do you need?:', yes,no);
    // console.log('What more do you need?:', yes==!no);

    const sand = document.getElementById('sand').value;
    console.log('Do you need anymore materials?:', sand);   

//    const comment = document.getElementById('comment').value ;
//   console.log('Any other comment?:',comment );
}