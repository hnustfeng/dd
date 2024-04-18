// const { BigNumber } = require("ethers");

// console.log(BigNumber.from(10).pow(27).toString());
// const a=()=>{
// for(i=0;i<=100;i++){
//     if(i<=80){
//         console.log(`{ "Utilization Rate":`+i+`, "Borrow APR, variable":`+(i*6/80)+`},`);
//     }else{
//         console.log(`{ "Utilization Rate":`+i+`, "Borrow APR, variable":`+(6+(i-80)*60/(100-80))+`},`);
//     }
//     // console.log(BigNumber.from(10).pow(27));
// }
// }
// a()
// console.log(Number("3.55K".charAt(0)));
// const { BigNumber } = require("ethers");
// const calculateInterest =require("./getPrice")
// console.log(calculateInterest(BigNumber.from("85375808938095141842590670"),1710257951));
// https://app.galxe.com/?code=iRGsGEf8o9ZltGRm2u4iZtuc0nPPbZ&state=Discord_Auth%2C0xe9a9fb0554af4ff167f2b33a64a358ea4c2d6aad%2Cfalse%2Cl8bCeKVeBiB3mtDWeMrImEeK6h12KrSR
// https://twitter.com/i/oauth2/authorize?response_type=code&client_id=SmFhSTZLcFJFT1FQdDR6RXlNOUc6MTpjaQ&redirect_uri=https://test.meowprotocol.xyz/&scope=tweet.read%20users.read%20follows.read%20follows.write&state=state&code_challenge=challenge&code_challenge_method=plain
// const {request} = require('undici');
// const a = async()=>{
//     const tokenResponseData = await request('https://discord.com/api/oauth2/token', {
// 				method: 'POST',
// 				body: new URLSearchParams({
// 					client_id: "1227507163946025004",
// 					client_secret: "kgtaFiMH6p6BA3d2GojsDAYkAsFKsmcl",
// 					code:"kpPL0GbjtYA8o2jdVCSqgUzZ9pZP31",
// 					grant_type: 'authorization_code',
// 					redirect_uri: `https://test.meowprotocol.xyz`,
// 					scope: 'identify',
// 				}).toString(),
// 				headers: {
// 					'Content-Type': 'application/x-www-form-urlencoded',
// 				},
// 			});

// 			const oauthData = await tokenResponseData.body.json();
//             console.log(oauthData);
//             const userResult = await request('https://discord.com/api/users/@me', {
// 				headers: {
// 					authorization: `${oauthData.token_type} ${oauthData.access_token}`,
// 				},
// 			});

// 			console.log(await userResult.body.json());
// }
const axios = require('axios');
const a=async()=>{
    const postData = new URLSearchParams();
    const BasicAuthToken = Buffer.from(`SkpfMTB6TjJUVWRnVUZySUdTN0JaR2dvNUFEM2NXV0NPWnhNVE0wT3VjMWtXOjE3MTI3MzYyMjcyNjg6MTowOmFjOjE:nsrvurh8SFRTxpilCpxDP9eAOFP2X9F9laCTdXCayC3P9aUfyx`, "utf8").toString(
        "base64"
      );
    postData.append('code', 'd0l0WHRPM1I2VXVodTItcDY2c0xjLTJGWEEzTXdGdm0xQ24wN2cwemhJWmZQOjE3MTI3NDE1MjkzNTM6MTowOmFjOjE');
    postData.append('grant_type', 'authorization_code');
    postData.append('client_id', 'SmFhSTZLcFJFT1FQdDR6RXlNOUc6MTpjaQ');
    postData.append('redirect_uri', 'https://test.meowprotocol.xyz/');
    postData.append('code_verifier', 'challenge');
    
    const aaa =await axios.post('https://api.twitter.com/2/oauth2/token', postData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // Authorization:`Basic ${BasicAuthToken}`,
        }
    })
    console.log(aaa.data);
    // const oauthData = await aaa.data.json();
    // console.log(aaa);
    const res = await axios.get("https://api.twitter.com/2/users/me", {
      headers: {
        "Content-type": "application/json",
        // put the access token in the Authorization Bearer token
        Authorization: `Bearer ${aaa.data.access_token}`,
      },
    });

console.log(await res);
}



a()
