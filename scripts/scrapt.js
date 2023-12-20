const { abi } = require("./Presale.json");
const fs = require('fs');
path = require('path'),    
    filePath = path.join(__dirname, 'addr.js');

    const addresses = [
      "0x782c40bE76fA232D1b87136FdcCFD71426004F89",
      "0x782D726CED90C1882595398892F3EA106fc9551e",
      "0x7855E1455617E61c86754FE56d3011253C795140",
      "0x794Dc8219554F447ee9774875279184ef91ccea0",
      "0x798bccD70E97D84620dB1852ec660BF8bccE4CD8",
      "0x79b4B8394eCC21F943d89877C88528f2c519D2cb",
      "0x79d31427601FA11c9eCababeBb6B1162f3B8CdA3",
      "0x79ED529FB0BeA17B64834864880a639F5be7ee8b",
      "0x7A1522549A6B73c1f2F9f9486ff241A63E689729",
      "0x7A350424Fcde4080D7583D18d8fFf82cC1F98F2C",
      "0x7ac17cb9B794C15fE0cfc612ca0a0E9655989868",
      "0x7b2DFEaC6f2d45769fBc7b83e4F85aE7327F3198",
      "0x7b68375eAF4632F4Fb4BCCeDeAF272c8DC278cC7",
      "0x7b9BD74CE7d793c248365DB48214F87270F1f8a5",
      "0x7ba7ccb2c615240d682f9b3d906981ac4fa5a465",
      "0x7BC0E11879BD52cE53f260040Eb8878f108284BE",
      "0x7bcb0992f29113890D76232194925Aa4dD7869fF",
      "0x7C1707f4a557B5A93d4Ce25532CC24D566F9dcf5",
      "0x7c54cD0693d2f00cc9BF4A0645Fdc2D98E8C5cc0",
      "0x7CaFCd557591348554B09c052988B5573773395C",
      "0x7cebeb6A0DdcF97EdBd76C71a88Ec66974183467",
      "0x7CeFd926C9D52862Cba178F7Cc16d8c955a2a62b",
      "0x7E2F64737D1B05Af6a9222Afe70933eec197052E",
      "0x7E306D6FF8E6120b7a8e43db803181E567524BBb",
      "0x7e3926dA863C5fd9a270dC49B57B2626Bd46BfD0",
      "0x7e832fb44d937Fd38F942460B184bbb227F94dCF",
      "0x7EDDd65D316DFfDe3A41Af591cB739c94e2218b1",
      "0x7F04CA39a9ab5119E3DA963002441448fcfA6a22",
      "0x7F227450f098085b1508AfCB7B30e127a9F69e7D",
      "0x7F45733F3C85d733fE2733259D4314cc65b1D4D3",
      "0x7f6d7481D0F43498A0eE5AB1C311697212dD9d0C",
      "0x80a1ddCFa04cefFF49520cF3b2A58a05857DEd2F",
      "0x8109ee58eE12B293Eb2e10a53C50533732E6368f",
      "0x812cAE4249f0c665bD588466a2356e4B6B29888a",
      "0x81D7f43eFa5E6945feE68B80F94852254d0Fb195",
      "0x82860FC04017154f51CAC64aD6B540C5cabDb4Bd",
      "0x828729D7F629eb24615ec0765100Fe7a1B13B1AF",
      "0x82a5FB01083592411Ba5a37210d0bd536c4f12e0",
      "0x82Df18Bec4A3D848DA4731b77D60c8690da875C2",
      "0x82fB1f438cdcdDcE757e846CD60c64eA31f30164",
      "0x8373B02c336D7E397b06F51B9Bf1835A02FA9dD7",
      "0x839596d9297F348bB5829CdE81F04730F6Ed1Ce4",
      "0x843dce58Cf1D9a16EfD5a42f4Deea04EdAabeA9a",
      "0x8459E93129051b2F4751B4Ee47Af430920071E9e",
      "0x84a909504759d9f16b297d4D34A24e27B609E991",
      "0x85524eA87cEAB631181BE7E6A23cAAb56496CC50",
      "0x85f273F39Dc71A7541017B58cdAf9f51dc4B6084",
      "0x876a08Dd7b51044442a1D0971845DA006164a6C0",
      "0x88195BCC1C808cC22C406663Cd117d054B387483",
      "0x8907a320668FAb0f610006e8d929Bcb985141de8",
      "0x891fDFB291Bd3703eEA37E3AC5e8dbB6c5069513",
      "0x897e94C1e0f5f91EBB62C1b013361bF1DdC6c541",
      "0x89bDDDf4BabF4D98fabe0Fc7E3399177426b0e61",
      "0x8a38B8128248D23Bb4Cbc4d1446ea1896E265292",
      "0x8A7f0299CF525439C7063802F042EFf2E30dfaDF",
      "0x8ac60F217F4Bb0Ac35277Eb8172B338933234ec2",
      "0x8AD0375E4fdDD94a8205f06713DDa456f54e5F99",
      "0x8c154277b255d74aa0e1F76dD1e323C46cbE9f90",
      "0x8C34916d1f24D0c04f67dF2296ADFB6573c5d92b",
      "0x8C556E0C29FaCfC80795B399ae5f3B485C2a884E",
      "0x8d22C8Cf67F51aA2004FBEa3Ba0BF5010244e3d9",
      "0x8d291Fd8375B0AC5dD531FC54F0EEf7D724D5D91",
      "0x8d3DbB6D90fBceC8521dd66dD1B84f5d0B04CB8d",
      "0x8d868c727d39AE8dec602d65d48aB15a6eF8cdB8",
      "0x8D94d805d0077981d3807f83Ad0Cd905d9172DDd",
      "0x8d9d1dBD09261c6eb3c7E15637866a62F4808533",
      "0x8db2c3905B2c5Cd4c1EfB88e1bF26848db132C26",
      "0x8E20878EeaF1632ec2355b99BFb3fAe58CF26DdD",
      "0x8e56d31F31E61A45EDE15BD130a3EB4F22375A61",
      "0x8e622aF175331cDD25B8C8f6Bf44FC908Dc55DDC",
      "0x8e8d53dE0Bd8B6A90244Be01028E31FC31236c39",
      "0x8ea317AdBc02a2B634fD2022578dF592235BBcda",
      "0x8ef1014255FEdC02f5CCE88F4281024047d28982",
      "0x8Ef7593d4F1d78fDe1875d39E5e95d2449AB352B",
      "0x8F230b86008df8DfC25B6BbeB052faC99114312F",
      "0x8FeEF2BC4b1eF3d8c3ed03de9C97d92f9fF10993",
      "0x9007FA076C1EF6d9E43A7846635255f19707C707",
      "0x9061f39F757289e21b8441bf7c52796eDa25CdBD",
      "0x91071A955dB00d862375D3049e0Abbca206082a5",
      "0x9129F20f2F9d2375aACDd6833df42c89dAb3fe9C",
      "0x9131C741Fb91232cBfC49A4aE616002d587491e6",
      "0x9157bff4a5770f1adbcc32ab9f2eee1d36a156a4",
      "0x916a09DC0025bE5B1C8cbAdd0951Dc6a521Ec3F8",
      "0x91841F1014070de06e214249FD943E8fC20858Af",
      "0x91a6bfB8b71c3Cc241dB491E383B8CE55E5A66aa",
      "0x91A8D2861c72babf0EF2Dd0A2F6605FD3Efb9136",
      "0x91EDAB627eBaa783dc75D4a07fFa72FD14191256",
      "0x9281289e1c7c67E67f86B10c7Afd95A5ed16418E",
      "0x92A5AC59F18Ae98903c8F31Be840741bb05AB4E1",
      "0x9318F5788c64cabd9FE332307Df7AB3dde16b163",
      "0x9430E76475f85a583e037e75c357EEAeB0972e98",
      "0x946D6A958D7730bC36555baB56400229156C4B51",
      "0x947f9E48f580Fe8c6b51c6873A79bDa72390f08a",
      "0x94D232B7da52eedFeeE77047DCe27355f0531685",
      "0x94d829ab695bb6b9DE84f4C887250De865A1216D",
      "0x95000f74BF44EB229546898E11d634C91bf446fd",
      "0x956f16B54B2f56D26c0B075258443a44800cc474",
      "0x958A7E2040EE0E259bdED63107f840F4fF04eF30",
      "0x95Cef8FCe73A182aCCdfB91F3cCfC62818a7364C",
      "0x961Ad4Ca8eC3b608a45668fA162e5b5b4bC95751",
      "0x9627A55023Ee07439cb5644cee7c38a8Ba67c370",
      "0x964Bedc4fF3dF6E6b6E038662ac8064e8202Fe3C",
      "0x96524c20A3e44aD8848287Bc2e9Cc5ea348DCD18",
      "0x965E8Cc3e2375BF8C0C7EF60cA20658fe774A276",
      "0x969EF06E8E246B55270821253d983700946aC7c2",
      "0x971BB4AFFb77cfc2fa480b07ecE12ffD31Aab6Ad",
      "0x972c2db6384128c529fa1aCc57E0524fb5a8A520",
      "0x974DaD795dE8eac5E6972fEA792A793bb84F49dd",
      "0x975B774b93E8908674B93625b86AFCf13640FdF0",
      "0x97736eAa3e06ef2039BB73177c2d5394D71928EB",
      "0x9777182bB6c2415bB6B22fbd1715ecAFc5b6CCC0",
      "0x97d7279F23Fe05D553B55CBADd193F8cC060451B",
      "0x97E87e2ae90A44fB4318B361d04BC01A765B86C7",
      "0x98069aC3F12d32F5866EEE9a602e6eeb317B98BD",
      "0x9875794a89987CF2D76547025c9D9034A461d932",
      "0x9891839548dB30EDFb481cdA25BD3847F7Ef8CC9",
      "0x997232736Ff0b5855a9E074b71415E1D77A1183D",
      "0x99E57E7D8d1EA5D26ff578312B3F9D50E56e2C1a",
      "0x99f19093B49066A7C0676dbcb87c62F9747E17E1",
      "0x9a20aC033DC3Bcf37BF44c0FEEb28283305Ac023",
      "0x9AA5146fF8E24fA158AB9F1FF5d4C0aff34D322D",
      "0x9b89869181B5696f55d8bB29e09DB80FC0549f7A",
      "0x9bBC5125fc2D9fa412d6236507350cF32128F6Ea",
      "0x9bFfDa927ADf3b6e98C14151409E41DCceCe7fa9",
      "0x9c0A55c4c21217EeE8Fdf52fE0203C37c457E792",
      "0x9cD875182e580976F830a8e9b23b5f350e1b41d0",
      "0x9d0D727e481B9fa9AbD47DBBEF761405c8ca81eC",
      "0x9d22367a23b58f51Bc64D2cD266258336fa2FB91",
      "0x9e0B9395EaCF411bcFe467058C1E4A4D3a8dA584",
      "0x9E4C96b743CCdA9af6b0F97b4E737Bc9DD71Ed08",
      "0x9e812933dD4143271F9818DDb5cc580df0FCa232",
      "0x9eC2Fe1BD842DFA869ea6606aE7540700C93dfbD",
      "0x9F65D2b75Dd1169842E6aAb9A65864B11441417a",
      "0x9fDc448719C4FEfD3cbf70523dcF3384c8d78d69",
      "0xA00F68a717A5B70e42E996De9BcbADad099375ea",
      "0xA0450969C85DcF50d477A3aeCB42c6327228A4D5",
      "0xa064dC37551C64a5296a0f934baE5015db5Aa8bd",
      "0xa0872B15329e9F4d2CaC7ea6cE354aA2F94bE1E6",
      "0xa0Cb5eb8791c3454F70F6267901253904eC887AD",
      "0xa0E58D644c3403d78e40a675BDbFD0966Ec4dd07",
      "0xa13324f7910689c1A2F2201ED64A1A4221Cf0f6b",
      "0xa187314377da9FDA7Ed6374244A47cC0047b4755",
      "0xa220a060F4b5eD02f40e7FfFC51b528F6b0F36CC",
      "0xA2628504f3ec71Bb1c633ECF55cCD6bc6c4bd2C0",
      "0xA294B79cbb7e403cee7642386b26bDD3277481Fc",
      "0xa2BFBd3D7FD4409aa3B8680D57F3bb64fcbC3809",
      "0xa2DaA348E10E9d212B81C9d6958B8b3BE4EfC04a",
      "0xA337f3Be409a7190ca77750C31E1F097fA858A94",
      "0xa36842778a215513a6D36603D1EFA590925a48C6",
      "0xa3E5556Be49FA76FdBFF235e59140aCe7D0C8163",
      "0xA408609065E898B68Eff2C19f7De82126197fE72",
      "0xa41Be7eF4c02E37479ca0aF05C1Ba051d94ed00A",
      "0xA44A5F0Ed09aa2B837d0B98c41E7C8c51D1F4e55",
      "0xA450884454F6683c1209bf6196F9dDF7664a0c88",
      "0xa4aed7ad8256C42c60956D7CA3a79c4ea4274bC6",
      "0xa53622866c3c3c56d1e1b7cfecc16fcff2b4c63d",
      "0xA537D82b7FA1C75F373970e826D6D545E86CB3F2",
      "0xA5474aA65d10CF33eB4B29189D77B926b843CBB7",
      "0xA5791c682b6A61e73193E15C50659AEfe3e41613",
      "0xa609B97cB82Ec99681d86699436De3123C6970Cc",
      "0xA60F528704a4b9108B6B1544e8201292cB81933C",
      "0xA6323f773058F1f0c7F117686Cfd14196c14AEda",
      "0xa67F8e43cEAC802402b96f9d4350006CF9729730",
      "0xa69467f81293848B2B41AB9AcfBB40E61b50B211",
      "0xa738621b7bBe6f9926b1A95423e8bd4Ac1Ab8290",
      "0xA7870Eb4B87A6EB81d1808bd2Dc2d38cD798bCEC",
      "0xa78AFcDd6725a95440026D762eD4Abb650e346F3",
      "0xA79b74f6e4697fe58D3ef5976Ab5fB760Ae67156",
      "0xa7f3c766c1DA525e256a8E17Cd166c42e6D63A87",
      "0xA888E810eA500e415a4c7029e62d5912f4281945",
      "0xa88dd508a356158066e81382438B5dAAaDC349Ea",
      "0xa8A6ec38f1FDf94Df59A45462E75af5A64f4b431",
      "0xA8Bbb28647A73AfDDF620b2c2907e0bfe44927F9",
      "0xa9062C164Ba54777A46cA90c375e42c87CB06cC1",
      "0xa91d91c13907Ccf86F71F02aaAC67577507a6587",
      "0xAa9DdA2e918579C64433677D66f3Dfc89d650520",
      "0xaaaf4ab78413fe3fBFaA0F361b930d1E3aB71f82",
      "0xaaE070e2949b71D146184dA687b561e878c54aD2",
      "0xAAF38B35544c6a200c6D2C76633121b3A5bEff8d",
      "0xAaFE1828fB3290b2aEf6CBF78099D963F6782867",
      "0xAB070fF57bD9d8eD3764b51AC0Dc42EfdDCF5010",
      "0xAB1b0C6EC9bE3dB870493CF27108A41c855Caf0A",
      "0xab57E46A62f20913caE288C4429c0868faA0acD4",
      "0xabfF46961078912726a1d7A5b1Ad1B7724ebef4B",
      "0xAC9477C0642900680F7Cd8E4D104C39f2B2B3080",
      "0xaD460523289D2a00f19776e8835CC475c05D654b",
      "0xADCe6e5b35597357A206cDA3d1c8e135525B55c2",
      "0xadCeb8297E10265c5f68Eb3e6584e72B8ff62B04",
      "0xaDF472668A622A2C41256163982B837aF8Af1e60",
      "0xAe170839d083A26527B6658E55d66178C8C72AC7",
      "0xAe1c46B454b5b15129c0B87631C9B9338f483a4E",
      "0xAE5543eB4ed5f73388340b286138ff9aD5C6a32B",
      "0xaf0097781Ac2Bd16C02497eA6758c56309067B41",
      "0xaf417Dd6A584C1899Fcf55B581cE5B0241AA2F3B",
      "0xaF43635f89f1Dda7b786674f1e89334EA5b8b704",
      "0xAF4Beca897D3c4aD737265ba604C725AaC135d23",
      "0xAfb0F30752fd3f47F5aB7a6521A56d8d4dAC18AF",
      "0xB00781462D2DCAB6EEA347Ab3eB1EfD011f8951d",
      "0xB017130BFd6446f306518658CA9be94b8e5EE453",
      "0xB046e7c375319dE71cAD15b0f61583ae9f7815c0",
      "0xB06d895e9D29bbF91CF9c071b6C5a609d60EAC02",
      "0xb0e5387EB053F55088654c160F15026F3406365D",
      "0xB0F1a6F42A52bcfcCFf4F7a3F6879F1E0B953191",
      "0xB0f8328F330f26d8ff9A55D0A32A71A69437652C",
      "0xB108f1B1aAEF8bFf2d2BcE5469631b9d250e44B7",
      "0xb12d2d546111cF9Fb65cde4E097c2C5E83C4AEf0",
      "0xb12fa6f9f733f46c56b728d87c91bc64d4429f0a",
      "0xB13F0a676B98A02ff797Eb23f915c7de40880a46",
      "0xB1551E447975Dec21ECc0DdEaBC11bE9F8F0Bb4E",
      "0xB157F037d04293B1998bFD6E8190bc8E77a652A1",
      "0xB1c8b580A6E633E2B91966565049e25E61d2EDfc",
      "0xB2Eb7847624254c391CE1de474b0a3f56525c118",
      "0xb2fc268688e03473a292D8DB4859179AeAd69C62",
      "0xB3371b9e103B6D313bCF1f33BCE147941738871e",
      "0xB3A652d2Df549AEbD524C1f048eBc085a94eE480",
      "0xB3Ab90aC268185946BC9beD8d4eaa1Dc0ABD3e16",
      "0xb427afD6D8f65c6844972DB353F45b194817F63A",
      "0xB46015aC1c16c295024dE35FcB4e041d6686D24c",
      "0xb46EA353Dd25C21d30D7780d35917537d13bd438",
      "0xb6EE43743956222FDe8b65029d12BDFEf2a78174",
      "0xb734B53457F3220944d50341094381c42d9397E8",
      "0xB76750Fe209b96c8B8cC7446B4326d25869608Bc",
      "0xB7A15382c440D1cFfF3522eBFCA6A7852376dd83",
      "0xB813FaF91eF106103DEf9753Ec41d1F6BbF6856a",
      "0xb865401097060050887ba58c787d646e9658c6f8",
      "0xb8878d9669712c8c89FA0DCC28c2a7819c719906",
      "0xB8B5A6bac4fAb2beB18A98D00a6B8AE5E66A884e",
      "0xb91aeD5b2adcA21D9387F670F59Ece8e70288a85",
      "0xb931dd815c494ebf3f3c44dbb48cf03982caa173",
      "0xB9a5375EA6ab7f5596b7a897EDE99e956381FB44",
      "0xB9b64571EE860FCF65C7E7b5db8ebFa3B3D66162",
      "0xb9d7cF19547Ca9Fd9536B6eF742f55752E6a1d96",
      "0xbA726143A1fa481888A53625231687707E42fc01",
      "0xBaD9E8295c90FBBE9E3017d6beF520994C654457",
      "0xbB0e912f1a7c37302E40Cc216935B6bdE801faD2",
      "0xbB3C8405629f94b69A2392bA34676F8657b80615",
      "0xbC1692E5599a2424360F8c06193E5848322d04e1",
      "0xBC23c8B5E9E7f186E0c74F4a34E7Ce8CF99723Bc",
      "0xBC367125f16f196C2b6EC517Ffe7C29FDA068dF4",
      "0xbC5D5F82830143b7Ac6faf69c692d070A9Ff94a2",
      "0xbc6eD3ce9fa0E3363C0Be67d9d962d2E994476c7",
      "0xbCe580E36A512bdEE1ABFb57F4a0F59eB04F70dC",
      "0xBd86d608C822CA89FCc5cCC0BD22CC0688228361",
      "0xBD8c66B206110f9f98559a42279143a0702681B2",
      "0xbda8988d6b9D77200121a45aD4632719396e3B20",
      "0xBde38db0b32B109ce4f8605701d61C8980A07C65",
      "0xBe7B6e82bf3ED316FDB517d3478b0D280eF01B02",
      "0xBF3Ad894510Cf72d0dB8D5427543f2c2807DA01d",
      "0xbF3c06a21b79d9486137DD150C2e1aae527FD6c7",
      "0xBF7245b86e2d7549310dfEefFD5a1c4de9246123",
      "0xBF8d74E9fF360237f51d453960844bF674A4495C",
      "0xc07EA9617304e85904D82E584bf41D3767d5507c",
      "0xC09816C3F1d604B9697F0bE712D3B174e0984DB8",
      "0xC0A88e6f111f96c0bE9796d29875b988E7800C5E",
      "0xc0a964cE93cC13174073F3D94718F24587a1F646",
      "0xC0BB0950eDAf70bbc13eaB6257959994B34e9A91",
      "0xc105241f6A8A850980822B0020E66680e2a6446A",
      "0xc15Dc0B66b00bFBb38fDD6e779A9d7ca80cBb84D",
      "0xC23a087e558D844A258deC6c514Af8566ed24A22",
      "0xC2aeB0f8b6fF746067Dbc7CF33413a4B0fF34ef7",
      "0xc37Fb47AFd73FB50856F1577d605Ba8ADB2317c0",
      "0xC4136DFc2E25703B84Cd26aE1f47983e0826F50C",
      "0xC4fC5D9174CA278Fe5f89B65Dc1530b037322333",
      "0xC512d8cc44f2dc752968820eB2eb4ae1242c9DEe",
      "0xC51E5292F75e1EBC65876798D27C5061939b1668",
      "0xc565ccca487C5d80e7eAF086007828Fcf41AA8b7",
      "0xc5b8C64063f01482d59D0D494489131A117eEe10",
      "0xc6a6f11252f5d25B452c99FD497Bcfdb770362Bc",
      "0xC751831Bc4C2fCBE9EBE92455933CFe2aA2aF2Cb",
      "0xC776eA70ac6F172cae2Fa4F6c8f69E26FCe34e58",
      "0xc7b8643c238A5852D7885d42c0a71736fee26bD7",
      "0xc825a85686B1E4F804A68C69c322B5fdA009812e",
      "0xC870CEeF418aFe2653e587c4bf7a5a3260BfF193",
      "0xC97880c7770EFb3a9ec5E9678E8891067F7698bc",
      "0xcA3f800D585F21dcd715dc16A47F8f8f5934de65",
      "0xCaC48a7197C5cc923c4f4ddCa06C4a51B2d5a092",
      "0xcAD9DED283D0FECa823BCE19A10da533b6FeB8F6",
      "0xcadB382F48C559fb8DB761793F0da63931a4938c",
      "0xcAdcede9e73C28ee4Aaf20bb3dCB8655E4aB684A",
      "0xCb00c23014B9485ebCcefBA3e5DAd1A96b64E025",
      "0xcb77aBE91D7b403E2aa0720469724dDC59a280ac",
      "0xCB8bA9032cEc6830e010b54E6C061ef960aFD2a5",
      "0xcB8fc2bC9343cC0050D1a8F043313a817AefA4Be",
      "0xCb924d001A536FFEAbb2b33C5e7fd14428a5aA09",
      "0xcb92b733562325D6F8Ad2a3aF4FED10E643fa22b",
      "0xCBD3DaFd7bb8694437FC3D0D0601Efc7540C587d",
      "0xcbefa58bf53c98d87d2e5cde45415b324d527777",
      "0xcC341377999E3a7bC00C7c7Bf716E3dF8d183014",
      "0xCc393b860e65BD5d92409D42A6EC7d78Cbd38c9F",
      "0xCc4D240E49F2221E8a38a102aBfabC8Fac89ecb8",
      "0xCC75b2937878f724C94D4DAa6983869069a42ebB",
      "0xCCd00E1D70c5e76f2a1E14E3630BF1B9fCC4e5B3",
      "0xcCDf0Ff23Ae8daD092792F17FD94659e368cC9F7",
      "0xCcEE792BA454A583F754eA549847DAd8F09b3da4",
      "0xcCf73F8F65B98A936C4195DC05a14D44b5483d61",
      "0xCd1318a162A2b527F36863036634fdfE3043741F",
      "0xCD23587fD92F052c814611EA2100500D8C16730a",
      "0xcd4362B020cAD9dD2Eb853a8c32F9f58a41962b5",
      "0xCdecD0D6F64E7E225964DC199a7d056c7FB24fff",
      "0xcecb731b9949e82d8D4Cf79C55C455240eC9e840",
      "0xceE7933cB7d26625B6c82Ab7FA646b95aF950466",
      "0xcf55DFE8BE609AcaA45C8a0F6A35031Dfcc80FA3",
      "0xcf71a03A181D54c8B7C4edd76C6941298A75fd0a",
      "0xCf95334507FF67c40d83C7dd505e3539Ffb361EA",
      "0xCfa531de65df8d713838de531F8D1660Bb6B1bAb",
      "0xd0d8DfEE80CaE011fE17A8c22E203B5d586cBbB7",
      "0xd0E87587580379Ea4d77F9852353c49e088E5361",
      "0xD1002924d4242Eeda33af75ac8E52421C81322Cd",
      "0xd14B40e3d68E1761627F8123dd6A613ddAc3ea50",
      "0xd170E04b5A092E669F8d16139CA1c7646fe900CB",
      "0xD18F2dc9544E910213C7742D45F658A873C14a59",
      "0xD1C1014E64ed1f9C3A27686Ee3E2DB1E45f26463",
      "0xd1D9B6AA22B927b5A01a1a0d21B30bB81a8CBdee",
      "0xd297eB888Bd3C5fdb655A0Cd0Cb1B1964462E792",
      "0xD2CCd6476eaddA1B1d31643d66514C33c4789a25",
      "0xd2e21018D9f966DEE10D4C5E46f348Bf442Bf870",
      "0xD31375FfA8b9AbCad8ff7D8aaeEd59A063a0782D",
      "0xd316d2db34123Ac308fefC6E559159a7b8e9fcF4",
      "0xD33315ACb51Cb4145d8BE63Fdbdf5aB3FB8E4c41",
      "0xd34596Fd0F79e46C6284c73B5fA8102c6D349F5E",
      "0xD355bcaFFf8Ff3545Ee573ac3cADeF00df29A6D5",
      "0xd365aC8Ea184635B543b08923B230D1606ae08fA",
      "0xd3739fa6fc2e2653007C6Cd8EB3BF451fD9F4978",
      "0xd3fCdA19Fde267E6A0fA885AF935cc681dcDfE36",
      "0xD4070a87c5e50Df061D6B8df2d111Cf004084Bdd",
      "0xd582F8744fC9D28680737735Ab146a2A2792E36f",
      "0xd5d0968F632af311c67ddbBd6fCE843E13843057",
      "0xD649Da086A6130417a5F2b9c0b592878A0D1c7E3",
      "0xd6B93440309dC396141FCb59DCe891BB46732dc3",
      "0xd6e255dB7be31f99BD9A73740757263c0152E1d5",
      "0xd6f5D2a7D4B927388c7ab6eEa58bA9d85119B113",
      "0xd7C905a93D535d34A5a548379838c1fd0C0195e7",
      "0xd849241EeF45920e1E8998DcAa0a18CEEa6898C2",
      "0xD8571B1C73d8A8CadB312b727D30B10bf2B3b697",
      "0xd872E0FB2204CbC41f90a409E799cC0AF7334C61",
      "0xD8839999e55A816d6f8fEd078C69DC8deA1997A2",
      "0xd8b3a473994F1A283270cf4Ac44036eAd39210b9",
      "0xd8D4520843292fB577E3f4e8bB64887406F0Efc6",
      "0xD934979677E1C9584c1661Aaab64c87aEB0d8D09",
      "0xD95d315C582b5AbC90a2b35e23CDa18B39AB7Ab9",
      "0xD97084e81ACe5ea6255B7f3fF58BFA5f96b00823",
      "0xD978cb2b98EDA52D554b31D591Ff5BEa6384d8e2",
      "0xD97eB1a17e21E2a6BE54a8E231C0e12aF9dec1a5",
      "0xD9D7b43a3abC406ED3c35e115effF314a2646041",
      "0xDA0144e12AEF4FE93b12a7a3E65Da58E614AdE2D",
      "0xda301D9dC5EB688b2219934246feD9be27a7B2A6",
      "0xDAA811DA4FfaB2782CD64587eF6eea082D14404a",
      "0xdAC17Ded4610531CaB8f159C2924Dc480Cb27954",
      "0xdB27e88C3ad9e879e39Aeb47c8404b918802cE30",
      "0xDB361ECCF4F0C60AFC647E5F644583c40FE975E0",
      "0xdb9eA9fA18a7F13cE9E07c7C29c2C2D6d8dd32Ad",
      "0xdbAAC15ecA2Cfd04A58c5C291b7D0098d607fdAB",
      "0xDBC84017c23A807adb75B29A09aa3F6AF6936B57",
      "0xdbdFF4B91374C4A59eAEF77693D33052C2D5bF05",
      "0xDc5b11256250Bde0d5dC4d278eD860AAfFe4251a",
      "0xdc5CBDe1328991CCb29D43C6DA302d8bbD870808",
      "0xdc79FfeCC6C08B6826796800812385AD85288ea1",
      "0xDCc7652E568141b2F546274011F9a5fBA0777777",
      "0xdd42bc38f490ed32d2ce8B282688a9098B7A5C17",
      "0xDd59b48Aab4FE689891F986c2fDA7a953A015849",
      "0xDDc57df3d17e817d5C5395A3ecf7B2875934BcB8",
      "0xdDd956aF988EB5414840d46C66d62aD76581d94C",
      "0xDe360Edd6834d3f3aF8E621Dd205377AC382eaC3",
      "0xdE44Ac18D27777c126790dbB8951Ccf60b10E1cD",
      "0xDe4e47cFFb4ca6F87D678c81E0c90302bDf1Bd1E",
      "0xdE5F70b94fe7eB6D7Fbd94774D3383F64f6d62E6",
      "0xDE608805e6b1818C5731FbD7D2C51092928FBe0a",
      "0xDe6177FE603492F73B7b6Cd0eda94a9e13B635Fd",
      "0xDe7306E6f5A00207CF5f972c30931dCf677D050f",
      "0xdEBecf1b63412E1f753d303cA5dc31A8d1f2619c",
      "0xdEd17A7a2Fc42da773F80E8543F0F7d855219629",
      "0xDeee93d679Df86A585721efDA0F5a63C2C41B2e8",
      "0xdEf11C304Cf43E8665d259548F635dE2Fcd95a44",
      "0xdF256c17c9e0233AfE4343Aa52b045ae3F8C037B",
      "0xDFb64D6354f650D735a681f51F295609FCEdDb25",
      "0xdfd18a1753eBf5cE49268Ba24a4f10F71D9d0193",
      "0xE0616cf63e9387A583C57DD836F3160B46CD092C",
      "0xe0fe746c6EE2d6c2316D3926560f2C8e744ab25B",
      "0xE18a10dC810B829F1E283D25b83c124CC7B94364",
      "0xE242E11F431d1ba9B5a8Ac2573A7E1Ea495f8069",
      "0xE2b72624D85122E7e49A653Bb1A0000a2BB6DDe5",
      "0xE2e071eAACf370dB194EDFF173B8d063076DaEc1",
      "0xe3507c22CF909dff687d34F64567b4671AF1F49e",
      "0xE37997E6ba28455b28Cbb2f101Fa28548B65Aac3",
      "0xe3a6365a12928d29e7B5832C1310d317dE4CAD14",
      "0xe3F51995EB795E1652696E7FC564DCA910e5D469",
      "0xe44c2723a01AbeBb4E5AacA3cD7aBBEddaa28061",
      "0xE44cd29ef5E441dd80013883708E74065c22D6B6",
      "0xE44dB3e5a5A0Cefb7d9005EF299D5A718b3BC841",
      "0xE4A4150787C5dfb08c5d8D242A2771A9E6BC7bE8",
      "0xE4A77f4c89F72c53988846E113993B1175df2D13",
      "0xe4EBC59D62a93C88DDFAcbF4440c41deA95F9Bc0",
      "0xe570Eefc192CDE5eB480e3e4450e33abB91676fF",
      "0xE5957a8b2B779A3F6eEf12E6Ba3AF807bd467421",
      "0xe5b05eCF2CDeBdD98a647FC07033F90Ed9A7a6f0",
      "0xE5C36Fa652a68bd0Bf4775fCaAd6162F1eaD09DD",
      "0xe60F5674935F4782D29AC945d5656a0BEdED91c0",
      "0xE666407E7429B063CE5e1d491337848cC96DAC54",
      "0xe66d2d43eB780cD534D25bA1f6Aeba86dEfF913a",
      "0xe6720Bb723CE8c7F642B87f841D026a633c9F3B3",
      "0xe699d5BE5c0F5CE09Eb2b2D03Dd355aF0BFE6bE0",
      "0xE6d552e507f1De70e24545Af83AA1c269B22bCF3",
      "0xe74dAA69a7961311bB61e9fEaecdB21bf5bBA85a",
      "0xe7d58d962f9cAa216106460878a9bC6D9b1ad52c",
      "0xE85daF2eB7B1591Dd5BD659E92B0A7371a07eA6C",
      "0xE8A9e77227331F56E98f04A5E3b026B131a98C15",
      "0xE8CaAFb1d352925BEab216edAB01e84a4Cd3B70D",
      "0xE95b418d72CbB4536A3E38b11cC3dF01900C7F08",
      "0xE95C35C613Ea91Cceef490f7fB3F17dE6E238bBA",
      "0xEA89278eE4Bd9644a57BeCc5aA416f148B91BDA1",
      "0xeb7bE2787335262815196b4430e1233C09BFE843",
      "0xEC312eC4CfDbE0e4EC983e006dba97ED4F1743F9",
      "0xEc3E59A86ca1af63a90Aaa8F77a062bA4B1F2Ed8",
      "0xEC4bEF90Cd2F81a434a609b343BD7E7674389C2D",
      "0xEC692429fbEce4f2396365236f6137605aABa6fF",
      "0xec6E544D6605b78D24afD71Cf6604Cc8d2430170",
      "0xEd0aAb9F90bCccECAd20D8a945fb7778f9fB8e84",
      "0xEd54500fEC278Ac6b404F7A8609222CAbC6aa04D",
      "0xeDA88227B2D9c7c13E8439689855a6d790348AD9",
      "0xEDC94Fe2e39FD3e2382dc79f10AAA8E5d2a2A0Bf",
      "0xEE5Ec7F6496c89bbAbD500FfA434b37B5513A49D",
      "0xeE7255839b54ac19951E4C2AbF173B9B44673fFD",
      "0xeeACe5d6572Da591134dFF76efBaa3337442225d",
      "0xEecEB01f4Ed7Ab28998A6BAD268AB23418e4e9FA",
      "0xeEE37ffAFc1370797fF347e6ba315Ea690Aa9e83",
      "0xEf011C436d4306f5b09EF4A7cA5D21d13CD10f6b",
      "0xEf54Cc0Be9dd413490F3De0212A1D52df05A1B83",
      "0xef936e97650842dd491e92b5db316f7866d668e8",
      "0xeFd5481a0Ead0f1a018435cB01C4800F787F87a0",
      "0xeFDcbF40d383C479ae807a4A405C5aD45Ab4Ce13",
      "0xEFe5CBc0F03fBC5A6b7350Cedf7ed1A731c1Ed7D",
      "0xF015A59013aD86562a440d60e484b0b51AbC0fD2",
      "0xF020416eFbE1Ae52167c1b7eAC80C2234e02a743",
      "0xF066dc7C5dc3715DDEeeE04043bA7E5459c65349",
      "0xf0719b6f52934Aae738db42879FA62C68569333E",
      "0xF0730EB0AbF5066c84ab1fe0Ca2C627D10af6449",
      "0xf0bf3F34C8aF15dDAd846354c4804141f12E1588",
      "0xf0C7108b25557254aAD7c2a0f81F6cC050E7000C",
      "0xF10faBc6cef4f333397571902ACb455664069944",
      "0xF19B0D76f6a0A2F9C76826C253bB5A9dF325d939",
      "0xf1C085fB811F3ba02A1A30717dC8Bf1E2E3Be556",
      "0xF220aA3D5e3e44092aA63eEe2B281d4B184E7721",
      "0xF258984a2F458F163fa7C3413D534FcdF5dF706A",
      "0xf281f522485bca66846802C8535e679fEa3AaC5e",
      "0xF2A531f03a1673Eb224335b9477a299DbDDE4d57",
      "0xf2c63E0e8Ca1035a8c8EdC7c6356c84EEe40176D",
      "0xF37D23fa8a72b85166cAcd681FcD6f2C1dF7A953",
      "0xf39aD39C4147f4b862bC0B4976563Acb1e85263e",
      "0xf3d1Bf494da8CED728A20d763B53828E8794b3bc",
      "0xf46D354A8C4C3a076867fD18a1b52A037eE69C3A",
      "0xF4BD9F2A13f57EC725761D80c5F4028EF28651Aa",
      "0xf4fcf0e0DC6DEB4d16029E967693863C00a0E14c",
      "0xf50bca3D72d5e7B0f2016F5875BbC081574E8658",
      "0xf51Fa3A26aa4866Bd6D9f014e5d7F7CCe56C4852",
      "0xf5aad7B16d0746c7324B8CdAbEC75B1183617919",
      "0xF67dA6071C0E2136298b5921B9576E7A8D9B5D83",
      "0xF6cFb1AaD423c93a5aEA1214501452DC5c4e2fEe",
      "0xf702F4837E4Ed5034ac78f69ff1cf710BeE34C09",
      "0xf72e06904F741995F5D5Ac014a292c3Ad06A194a",
      "0xf7586D322CdaEC593d342Cc301c4d502593f0435",
      "0xf7a517dff44e4CBf47aE854CCf8C2015B4Bfc9bB",
      "0xF7b93c948F3e327b2bDA8aC9049e88CE520498E9",
      "0xf7C135E1A500861CE6Ae895d332CF297EFEa4274",
      "0xF7fFC3181300CD0768C2D1f7EfA861D27617729A",
      "0xf81905a41195533bC2137BD91cF3B3809c056b59",
      "0xf887BAA549BEcb3420e44e1eF6A70881dE15D97a",
      "0xF8cBcc8459B2B861ADc9d61fEd4Ae2C941Cbf2d4",
      "0xf90DF43b023a74Ff764F39c1964Df14FE9eBc0F6",
      "0xf972270fdcd130c6D7f7286CB48FEFccfDc506a7",
      "0xf9Cc96587D72748ceC9F0129258518b82912A92f",
      "0xF9Ef9eBb1Df3fAc9C835a3E816095fa4Fa2B7335",
      "0xFA460Ba1B4cECaF6f19a5366288f8EAc6A319971",
      "0xfA51c632042b1be8867bD838181acfF488896bb5",
      "0xFa6BdEC36Fa7713B49755f25D00b2F29e6F3Ca43",
      "0xfA8bd093afCD302a59F75f417Bea9FDDe93E68Db",
      "0xfaabDf404C5D9a2a8C633E48a0d157C3ca479EB3",
      "0xfaB01260afe73cAB407ED301b114ea25abC68A38",
      "0xfACc08c94B93E2B677C8E0CbF827bA751a12e34c",
      "0xFb33799C5d7FED19431E11593F4bAfB7B9071040",
      "0xFB5986799440f5bD86579Ff75A043860CE3bd8B7",
      "0xFb65940fC718Ed0f9b75FC38f8843F454Be7183E",
      "0xfB6AbE49B3935DB435D105c238a17DD597753799",
      "0xFB8a3eB1B9Df7C7a77998cb7C10CCb7f58ac486A",
      "0xfbb6c6dbb7853A164b3a98041E4C0884D7Cf7f9b",
      "0xFbEb75Af44D2c5944EdAac495669353BC9a33C9a",
      "0xFC847a9B1751EBC1AcFb0744F8E7076Bb2fc7e4F",
      "0xFCB59b44Fc622c70704789C99bb7173AE53ec4a2",
      "0xfcde8A15190606C28dF744bD5Dc20DeB22283Cfc",
      "0xfD9cB1ab30dB86238cFe8484aA931993F8D01295",
      "0xFDd6710453eA52e70ab8fF234648726047CA06Fb",
      "0xFdf2b5511fa41018D43c19D0C6BDdb58dF845324",
      "0xfe73DE5C212a4fE4d802Ef7151122E408079D656",
      "0xFF4Fa1Ee6eDf5C01879923C757BE3a9E3E0B28b0",
      "0xFF516587eD8ba1DC07313308d551FE2af76e8F6C",
      "0xff7337345168bcFc7b6c9e54B830e8A6C85308a0",
      "0xfFAB351a80Cbf8c4f1d378d17d21D10670E2A1D7",
      "0xFFCf1a9Cb1Ea71D8DC415B7906FAcB70FBF5E9F1",
      "0x001eA9d2BB59C7315694feA41A311F060CA20d2f",
      "0x00d3b058EB3fb326A27F99b98442098578c6487d",
      "0x01c8A57fb706C859751F52FE1C83C3163b129289",
      "0x03C474ce056BFDa293ee8135315bB536Ef3BE69C",
      "0x03f86B721b8b1a17C385E1Bf43D42A7562a0fDe2",
      "0x055C59C2e77c33E418dD71df6778731fEa537154",
      "0x060F5B195254583e8f8A35fb31C3825cc7E64744",
      "0x0793335D9c7895e3C2df9F4519958e34b412203f",
      "0x08751b09cEF520fE8e63E23f7E7527Bc21A6Ab2D",
      "0x08ae3bc0cd34ecb2708d780ad4c5cb3c598bb5cc",
      "0x099BcfF810dBEA3caE95C74cD08eBf130bfC2E33",
      "0x0a05891Eb32126b35D61ED85536C0cB42De84231",
      "0x0c3d0B514fCAAD795611AA92fE0Ac1f0AE8B192D",
      "0x0c99bE642963BF94027Fc1d2dafF6ADD4398Ba03",
      "0x0ce21D0fA4bAfF35C69Fe7bC19A89B1C09ceF948",
      "0x0cfD66E4694f7659454f4495433A23ca5b722bEF",
      "0x0D85F70BbbcB3e3688bB46DeC90A875c05e0A7B4",
      "0x0e880407DD71525Ce670DC3EDf8956339C8a6D3e",
      "0x0eCe164d0646640b93f35E6Ef29729b139B79bb2",
      "0x1001B0DC475D40F1d2692aFdb03C358928C1D70c",
      "0x1154690ad2ff065814c371b8a76840204e9537ae",
      "0x11fb78b285486b3e01ec4A8FF719DFb528Efd075",
      "0x1241469E5FE22BD9f343c242272D2fa4d9ab1a33",
      "0x1370b4393ea867D06F0C15cB7f2afBE27f79CD71",
      "0x13b9304cE0d1aADCc8F48314be2dC779CEe325c1",
      "0x1422f6A43b0F92b410BDC7e32579F2e36f5D53C0",
      "0x148DE8d24689daeDf924C589900DDB4Db82cEcC6",
      "0x14E958EEAce6425dBBD3954Af3d9Eaf947467961",
      "0x16242179A1A25ec03cc41677E79fbE6E72d0f686",
      "0x1655fF72C665cE405338F7ac485292976801c9fF",
      "0x178Aa80cbE36a12341CC66291e6d2C1557602790",
      "0x18fB1e6Dcb9E4392Db6a30271836e84A25Fb6F44",
      "0x19F6a72677595a2E2d3EE5202C1E21fbEEFfaB2A",
      "0x1a6684A5A8522496d6743bE64745cd3C71115269",
      "0x1aC28c89932e756D120acd2C5cD3B54A46543794",
      "0x1F14f3C32450668cBDa4A48Da3360e4F5172DD08",
      "0x21EDD7C031FC4dBBCcFEfC3e7469eDfed5e0356E",
      "0x22F7688494CaB365e4e66105F9Bd9f5cBca2EF5E",
      "0x22Fe37bFf1C951eE5e99c080dC7015f5fc901f31",
      "0x2315402271C7b8EAbBf8943155BCe18d92F49E62",
      "0x242462addb571024eb881Bd6E8213A8CED19D6CA",
      "0x243c3CF89d661B85f320612528Ed90C57c53fD26",
      "0x24895Da5f03187c23FA318e54Ed4069af373A5BC",
      "0x24Dcb57E9E53516bC6d416A9277f023C99f31568",
      "0x26770A82bD8d76B1763b729E2aCB03bBeb0FFbB3",
      "0x275910aFE61a9A26Fd75C11eCA4d40D246DA5101",
      "0x2a7d404B35553c429e2029E08005fa3bf6824552",
      "0x2ab230823eA967846Cc4d49cA5cc808D01aB7d20",
      "0x2B9fA81Dd38d497A5d7f1B8f633c6291d4B07Ad1",
      "0x2BB10dE20F863f082b077B89B0541aA451Db3684",
      "0x2Bf9222DE25775bb36A66Dc9Bc3a320e96F4B750",
      "0x2c607ECfFE10964C06dde68bb51167d48AAD6F7c",
      "0x2CCa7b113B23F643B6e77CB004bfaCDde28cFea3",
      "0x2cd72919D2e0E4A57bCea3c506cde9d10c771558",
      "0x2E46f6408CC75496343a5C9F6B89D031162B0C07",
      "0x31a12163B5e47624115Aa77607BAAB1E7fd4e07f",
      "0x33ecB04D3273057237e90FC4Cc7C464B14E3992A",
      "0x360dACd4181Fc4A600b988AE1F598876479772e5",
      "0x379327725D8c9e04fd30835A01B3f78158F0A710",
      "0x3b512164F23EbE712e18C82677873dc8ea291127",
      "0x3bb88058A671e997F6E71dF864a35310D0280471",
      "0x3D809D99b6269FcC693179362be71316C27AB7D9",
      "0x3dAeEaF3d685419e5f06Bd90f5900f6c87F8F829",
      "0x3E29ebECc918eF820dE7Ba0231DceF0C3ad14975",
      "0x3F3588AB23e441b5181e319C77bC9Bf44515A01f",
      "0x3f58e8E7e38432416c3a653d7924026E4fEFa387",
      "0x40DAe332F1bCb2DD207DE8b37A89942984BE2483",
      "0x419F783DA90635b6741AD8a57998DfB5cC802278",
      "0x41Ebf36da8818d24540e7DdB0a64fD5e1Cd57222",
      "0x42502e45B30305073dcd534eF068948D5a74312D",
      "0x438Fb096Dd9A20A263E5E68DF1151022C8Ab4B00",
      "0x454c4AC930d991BC2aD3A9449eB18913bff95F86",
      "0x45DCA9Fd3d7E0CC395b31c5A8B07aB4BaF117e89",
      "0x4632105Acee0f4e11a1c5672Da9c839Dfd5857C9",
      "0x466626FA5900430f774fc4649673Dd092a071c60",
      "0x4674111580396D9B2D356530622D18CB130c418B",
      "0x485b4A5be95096AEac6A04E3eaf1BE2b880264A6",
      "0x4862C3e547e519f108e62e67a63Bf4663CaF18EE",
      "0x48E92fdD880D456544591F3e34C37E81DC371115",
      "0x4a4d7185017053dC2B007a15f977589e88888888",
      "0x4aCA65d0CDBf6Bf4644708c05279C32910A29651",
      "0x4B16D8b9f0d85e9a25cd0983725aF08c22F7e9E1",
      "0x4be4ec3db3ea8fe329d06161abe6a714dfe2434a",
      "0x4C028f923c0C0A31796fB0FE4Bf7394b7856A6B8",
      "0x4cacfDa3B2163ad962cE89b2f11B0aeAe6279E6c",
      "0x4F8Cd7B47722CDAEeca29f12A4E4FCE3A5558E33",
      "0x51bc8fb4f2f397ba276ab44ccbf6b7870a32a20b",
      "0x52F7a2421e63b4EeF1BFbd3D6ef93C9Bc4EFec30",
      "0x5475Dd82932791e248C720872fE2d77005F80247",
      "0x55036F00D3C1b13bbd1c328BE9F04eCfc7993397",
      "0x552cf7252aB5d745415E047E55aaB03435221197",
      "0x56858525a6d67916E144b55742C5574577af2C8B",
      "0x568F1145a4Be2f9435d456789E86E20c775275CE",
      "0x56E60492721fdaca52D05c3421ceEEA54143be77",
      "0x571834f5A08C270049eDa6cE1d23BA7AdfFbc11B",
      "0x57688715a90da1ceb58a7319f18eaccf042b1ca9",
      "0x579A431365387a17f99559065F95845E5d09f5AF",
      "0x59061863058d8b183edeb5b53d57ae147dcd7fbf",
      "0x59809ff60283a92103865f8c5a76225a51c015ed",
      "0x59e4651E7b2F0668faF7051fE1e4A140cB046ABd",
      "0x5c2f8355910c2efb03a44f5ecceefd5d9224755e",
      "0x5EC566e80EeDC47eD83D1a574F67C839Ceae518F",
      "0x5EFd946d9C87FFabf5FD56F4aB9240f38c5B6113",
      "0x5efEd7Faacecb1d5d3f9245a2d204Df96b75ef3D",
      "0x5f10951D9B4A76f2241EBc9331Ef1c1c66BD1825",
      "0x650da7f46d2461cbf061e837d913cae9daee738a",
      "0x65bFCA07C380C5b5F6a26cFD7A397C677B365677",
      "0x67dE81559dEdF0E413c56DdF1C466ef77894495F",
      "0x6Aa8e73096f348b009Dc33d5FBf7744979c5c3d0",
      "0x6b5db6ED7A6E1B5050743c49351094A64d322279",
      "0x6Bf7962e0d5A84267C4f6e95068e296e6cEc7531",
      "0x6Ebbc7d14D2CBa8c1265aDE13A0009F4c5FEa3eB",
      "0x6f33e76760002D5D4d87C270C609d3f9cE1B9505",
      "0x700577E8b2F71aaDBB6ea88E5F490b7fb8823ae0",
      "0x7119c6cad8d57dBAd655a3c7D8d06e2f38415144",
      "0x71C0C066AF5d835F3e8E982c6C66F9F53701177E",
      "0x74841de9709416382124F006aeA6e83842F6FccC",
      "0x763211dbBCD03DdA08A06BFaEb6823834c6c1C3b",
      "0x78A733679f084E15f45828523B47A52f65C17B96",
      "0x7943cbD099807ab7776C67A0d5650B5Cbe39A4a8",
      "0x7Acd6644f664B4a1cCd9e4679C7FC6b114666b58",
      "0x7C4C6427b115D3daE2D079E6429e7A847bB66Baf",
      "0x7df36e9cd1827c13a4E281d956D8c86749666666",
      "0x7eb2ff2e3192fb709d83a4afb7945e3c582c7263",
      "0x7F28CB22B773701276B2bc62301Cff6EaE91cEE2",
      "0x7fD89BC255049C332006D30DcEeD7cceBAa5e5b9",
      "0x826aB495524e8d0d0A2154e9cdf62bfeB14aA389",
      "0x826c77232fd300aaaf8c9dea24512b08148a3cf6",
      "0x827144A363243eb48fd3418861447DDC6398Cfd8",
      "0x8460d8eb28e0d45de9961ee31468d5da70abbc1a",
      "0x87116E1f3C20ceba3eb42cb7d7879CD60754f221",
      "0x877475F6c76dDd241a61e55D4231BAEC3411743e",
      "0x87822d6c4b147F71eD71e9537944D14004be4083",
      "0x88b59334613c708e98b8225ba7bd0df05cca28fe",
      "0x8c10e60528406D42882578C8f96ddeBa73D25D92",
      "0x8d7523eE3b2d2b00A1358ED59Af52D6CD970c08b",
      "0x8EBa308d436028Bb3285C49DDd492b74d2E09AB9",
      "0x8Ed07C8029BE5EE11807Fb742B252E09E8D79703",
      "0x8f294408397FB721E01F9f3EcCFAb91Cc708B77a",
      "0x90efe0257e680e4877ad55193489f96b3b02ffe8",
      "0x914727fde2020FCac37A19FBA0C82CbEd15ED6a8",
      "0x92D29B61B696a75fAe24B210aA1664c1A2fe5225",
      "0x947e701C4A34cF3664f7104E0A534F9f459Da4E2",
      "0x951e741D9a86B72c36A0E2D7a8D2b49CbefF7a1e",
      "0x95d3F2fA6cf2F1eCF4ade4B295B4244D2d4cF4C9",
      "0x95e397bc0859B1c59203E97E82d1a0b0683c262c",
      "0x967AB99918366614BE13cb040985A173854D39B5",
      "0x9747A922E1EE855fe8B3241cE9a0FC04AE28b028",
      "0x97933eB916dd4E4465b973172f2aF7307aaBFA3f",
      "0x98BD0368E9ca2bb739975e9A155aa7a3F6F70D05",
      "0x999999dB8a4aB0BC9Ad1d0dBcA5c77a8D28cc258",
      "0x9b923587731393ff54e2a3cc78343ece190aa9e2",
      "0x9bF832A1d97262A91770287bFA300DcE7D5B3cC5",
      "0x9ced95a1A52877671e408Dd116F0024c6d578548",
      "0x9d2b8ea4328e9b3afdf43d23fe4b8761ccd0817a",
      "0x9d78bcb1675aa3fa8C4F73BF5221C743D2EBFf5d",
      "0x9dCa695b2c6d269EAc04C351B2d45a7D549c6255",
      "0x9DF52CAb8529D3DdAB58a1f2d483BcA4326eB711",
      "0x9e35b7AAc3AaCdeF6c537822a9C45F77119c48D2",
      "0x9fcaa141367c6d1f3bb6a34b4053904cff91d187",
      "0xA094d87E5b572e4288eDd3FAfbbe9c549B5A346e",
      "0xA19b74885097379C21EC39CDA2D9E3cF830BF71E",
      "0xa1d002c888B937De500101871139474494d7Ac4A",
      "0xA23c554e766Bc95d2C6662160Bb09DE673294B65",
      "0xa2a0F6ac04791ED5ebA4748d46d0a511d3361D5f",
      "0xa419260Cc8D1056789aB8Db6D91Ab336ceEa114a",
      "0xa47691ee317e9167837BfC364394E0584f184E21",
      "0xa47C7F4003ceB55Dbc78229353DDf0bc8Fb39DCc",
      "0xa4d5E5d72afe379f694b417aBbE294b1bc3f60b5",
      "0xa511790B5e70890eF0b6f6c2171997D50885B8E3",
      "0xa7153f8f59961401646D88630619eD529Ad5cA3f",
      "0xA8d068BF0Cf8911942181A5A2DC7cdD5ae02bA82",
      "0xa8faabc65ea21dcc3634fbcbe86ff0757f7f8b28",
      "0xaB71b08c7e1989f967Cf7226ccD2A46E99999999",
      "0xab86a91926969a13c4dbc9ffcfa1685fc5c6c565",
      "0xad52acf7E74E5321266febBbA0bD88d884925554",
      "0xb0aAec930fc26f158337Fa71bae18a53a077aaC3",
      "0xb17dbf301bc096e7c61c9b6b299db8b0dc742649",
      "0xb4E77B2F021f54F5b8DeFfff8301F92a5938B9A8",
      "0xb7FF34a85a1dF1D486DB46735b5049709f689257",
      "0xb8b0a0002BD2Cf6f933C6cBDdfF5c3983450DF06",
      "0xBA76Cb8F87b98309314B4F2F06CE5948e46c749d",
      "0xbbA6aDd128D8d4fBc55AbD7769c92D5A73bDc31d",
      "0xBF0CCB4bb595869170F5543268d75d0A5E39648d",
      "0xbF56a0AEc4A8959406de9D1F1fa5BD40c26f4204",
      "0xbFc1DC70304421104fb11c61E9fd2D97E28Be734",
      "0xbFce64095D6f87dF58CBC22C56AD48CA797169A6",
      "0xC04eEFA6863007636E2407EFFE7f6D79187A61ED",
      "0xC1B79541Bd415dBB612E02FF7f6bf109E4C5684C",
      "0xC3d555bE652cE5fF44a25662E125e71BEA5B8501",
      "0xC48e30f1cdF499d8A039bd4b371a169D0573f056",
      "0xc6E95Bfb5d742b219D2961a5B75f64ea4b4775D6",
      "0xC7941Cde4D7807e0AA62a59bE2A819De385f8e10",
      "0xc98b90478d0fa91f1f8f3D969bb01F75062d0d71",
      "0xC9B47Bcf9468581116A4F3517ae1B518f0bbe9c0",
      "0xca9394Ba68e80Eeb960e4D8a2CfC542c125974e6",
      "0xcAc94d8C91b29C9e1e8d68d00B18A08ACCFC7826",
      "0xcb567b9b978a2F341995108b6B3e7fA3714C0Dc4",
      "0xCd91f864c93b718F6AEd018fFA62D8DD9256024e",
      "0xcE41cB608D6E1b74e8DD9f3B8dC3EadED51A9999",
      "0xd144d54E5C2569e01F49e15943c16DacE3e157Fd",
      "0xD4019861F7626b0876165D928Bb551d65554e557",
      "0xd4CC92Aa9bF1916A9faF44bE45b6Be64533F42Db",
      "0xD4e660B71dDb4F24b77425DecBC064CaE6F84766",
      "0xD7079aCa549F49F391CF5FEf6aFF341dE1967C59",
      "0xd9023e4DF3357dAe60c6860d6646e924Ee1F6d7e",
      "0xD9657e8A402515372247917FF1F7f0123a75DD7E",
      "0xDa704cCdF7be0386106e751dDd71a6bEf4f4EA45",
      "0xDaE73E0732DAF9028442aC440465Afce88cdbCa6",
      "0xDb68C2ffCCdb1Cb4041c6A301Fb5DD4598503AF8",
      "0xdC05140713a6c86617ABfb6a09E5C06F69461dE0",
      "0xdCcF6fBE0BA028F48b18d2251aC3B1d6af3d4994",
      "0xdd2daccf91606394622b2ad617d3cbaf59a78e93",
      "0xdd52c77Eb073A963c56c22D360df1FbA8b9E9F3b",
      "0xde395b731c5654b9367bf4c79613ba6287c6de1e",
      "0xDe8a62B75ec1BFdcaA172a0548Ad7F4aD46DAb7B",
      "0xDEE71aC6f1c31873a0Ee26793BBC564BB6cd99af",
      "0xdF25F3c1762BEDb7A9282FF26A395F7C7fD70ffd",
      "0xDf80bA8A636BA8Fae88bb22740bC85fAC41dcfb3",
      "0xDFE544dCaB8e9fB710fdA9E86554FC2b22808793",
      "0xE18046dcCB8940f159b6Ccd58b89246Cb2fFC144",
      "0xe2E368147F33fC703AF2f27522B0Fa904F98F6C0",
      "0xE2EDBBDa805B2c36155aeF53D7b4218258F47e75",
      "0xe4d8504A53b6eb17d84758AfD2223EFc98c2F262",
      "0xE68aFC6f427e42aad35a45D3C67a2cD40437B206",
      "0xe6953b980cF9729B3e4CA9652BE4124A9Ab6a8e2",
      "0xe7eDcb0cb6403a947d6F5d08b8D3876b9042b077",
      "0xe8dbdeD8AC0b3AFb03C4140Dc6bc96CA96Dc2AbC",
      "0xea0d390f3058e12465b83584F12d89c3Be68D642",
      "0xEa149a0fd5427818B3aA664b2128ed4Fc3D029C8",
      "0xeb6Bc3ef793931543e36512B294F096Ba6439fA1",
      "0xeDc290e4fAcbc96240d2Ff4B72dc42DAeDE71f4C",
      "0xEEBb7Ace6086ef29143d0832E7172d50a130837d",
      "0xeec0424631417768a8542762d0e642603256b2ec",
      "0xEFB141aF5a117C8EA9A1120b3866f98c1deF2811",
      "0xF225d6b813990ad76327288E75aB2dC90d74cAC8",
      "0xf3141113BaB82dB5F3be0a3e259a53b6C176bb9A",
      "0xf3d842cd41616788E98198370E7cc6d18D905042",
      "0xF3Ff38d224352a5b95AEC79d975fe77Da3Da035a",
      "0xF42cBa8Ad40C88Bd42717B425598586e8A9473c1",
      "0xF47dE240CFa6fCa34EF81b5115A8aEEd59f88aEE",
      "0xf5DaC1C767f5669FE4661b3894935E0761E9E46D",
      "0xF805B03d5DEc5A4D215EB36eC96940261640a843",
      "0xf8dbAF0c870f0Eee7E97b1846254165ee75f033E",
      "0xf9248cfA77cE294d38c91cc392B4296D219b5E0A",
      "0xF99Ec3e99157F3c9E54a36a4C74E668e3398eCD7",
      "0xFAcD70AFcD17cB1743E7844BE5167b98f979e5EC",
      "0xfB726B734b99EfecC758629b21447fFF7707bF54",
      "0xFc73Ee8726a0C657226d3d8a1527695aFbC13118",
      "0xfc9AD8a04BE42A41374539B640a3a873De77611E",
      "0xfCA2B66aD9771Ed512FD80b7D2074F3Fcd89AAF0",
      "0xFdc18aF72adb07d01974a291318C25D668be79bB",
      "0xFE4ef8C254bFAcCf44A3e6cb6Eaa1Ebe22fB8a95",
      "0xFeB92fBCd973a154b1a68295189B52703bFbD025",
    ]

console.log(filePath)
async function main() {
  const [deployer] = await ethers.getSigners();
  const presale = new ethers.Contract("0xd1aea1db05e19b7eb05d8ad2c8aca01a49407d4c", abi, deployer);
  // fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(data);
  // });
  for(var i=0; i< addresses.length; i++) {
    let pur = await presale.purchasedAmount(addresses[i]);
    if(pur>50) {
      console.log(addresses[i], parseInt(pur, 10));
    }
  }
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
