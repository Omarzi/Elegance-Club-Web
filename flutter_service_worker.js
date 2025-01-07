'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c5f263f8140f8a969bd723ed48511d83",
"assets/AssetManifest.bin.json": "8101cb05171f905833384fcaca187d57",
"assets/AssetManifest.json": "b134f1761d8cb1fbf80ffc61daef42c4",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/images/01.jpeg": "a7e202f6565d8a07164ab1890e4764e9",
"assets/assets/images/02.jpeg": "3d1fb416f848a35b83a77cec774e2262",
"assets/assets/images/03.jpeg": "8055630836f4f8aabeac5de152601d2d",
"assets/assets/images/04.jpeg": "bebd532da04b9a72013ef76212dfc785",
"assets/assets/images/1.jpeg": "b1dd831bac2c6927e317dbd85619f932",
"assets/assets/images/10.jpeg": "7d68dc647394ebceedaaa86b83ef0dd5",
"assets/assets/images/11.jpeg": "7b34ebe3aa2a5e601b3ab519a6fa2337",
"assets/assets/images/12.jpeg": "27aa62030af3561b52cd055423f38963",
"assets/assets/images/13.jpeg": "3c451eb7688c1a10c114b67396244901",
"assets/assets/images/2.jpeg": "815cfdb596ecd8d8b0c25b773e1c8997",
"assets/assets/images/3.jpeg": "38a149d10b7eae33f6028eed134ea99a",
"assets/assets/images/3BDLiving.JPG": "9b2d7142f718d97c7668c0fdf5d6e602",
"assets/assets/images/3BDMaster2.JPG": "b003819e451188b2e3a8495d81cdd16c",
"assets/assets/images/4.jpeg": "4055a244b544f8a56f0b23571728ba23",
"assets/assets/images/5.jpeg": "b0990de23c651b3d8b796d87c05cf634",
"assets/assets/images/6.jpeg": "3617ae6fda3f69090a154b96eac6acf4",
"assets/assets/images/7.jpeg": "4ad27fa1ff379bb02e08c9c976f3fe0e",
"assets/assets/images/8.jpeg": "e90cd715922373fc72887abea9c6d585",
"assets/assets/images/9.jpeg": "c9041d4912c8be47def31425974fa784",
"assets/assets/images/activities1.jpg": "1d31020814efc696d2a86ce699a645ea",
"assets/assets/images/activities2.jpg": "dd9e1826ff0e9eeec92e904ff8e39566",
"assets/assets/images/activities3.jpg": "9c3eae26cdca7b4a5391f434c83df985",
"assets/assets/images/activities4.jpg": "5bf75ce4937edf766a9350ce7a490161",
"assets/assets/images/activities5.jpg": "f236445fe9eadef8c16e6ea2de141aca",
"assets/assets/images/appLogo.webp": "f7dae488e23ecedc6fab1d5b86392a71",
"assets/assets/images/banner1.jpg": "061fbdafdde948ea47e466f9b6fc2255",
"assets/assets/images/banner10.jpg": "6daacba3eadff1e87cc8628f360e72f1",
"assets/assets/images/banner11.jpg": "7642be93b05c80805c812c10638acdd2",
"assets/assets/images/banner12.jpg": "632eea55614efd0b44280e5bec2ea9ad",
"assets/assets/images/banner13.jpg": "e6638d462442f93cb6fc878342c8ff96",
"assets/assets/images/banner2.jpg": "a7e064d10a88eedc50109b697a346716",
"assets/assets/images/banner3.jpg": "8573542d2334e7354d09278c9a17134d",
"assets/assets/images/banner4.jpg": "a96dfa1c5e1f6d9c0f8aced10d33e908",
"assets/assets/images/banner5.jpg": "56bc261ccdca3e92e775e559a37ead2d",
"assets/assets/images/banner6.jpg": "26b6ac226c0e793ec169b64752bdb8d8",
"assets/assets/images/banner7.jpg": "9f6dcc0e32720ebe7d104c52ea9b6667",
"assets/assets/images/banner8.jpg": "e6e52282429c2fb06c75442671188622",
"assets/assets/images/banner9.jpg": "604b1b215cd806d38e7b5b34a7d5188c",
"assets/assets/images/carRental1.jpg": "888df9bd4083d01981b2b3274fe2d80e",
"assets/assets/images/carRental2.jpg": "29aef2214c71930ed2eee3274f277de3",
"assets/assets/images/carRental3.jpg": "646904a012d9f11a9e640473446a3bb8",
"assets/assets/images/carRental4.jpg": "31aa69ba8c152b07782239322559a704",
"assets/assets/images/CofeChoco01.jpg": "87928813f979e0c5ca885494915f6bde",
"assets/assets/images/CofeChoco02.jpg": "c8bd89d6956b1422d9e5f0be8856bd9d",
"assets/assets/images/CofeChoco03.jpg": "88e5016d355b720aa21d44f1a308c05a",
"assets/assets/images/CofeChoco04.jpg": "64b55aee1be1a6cf2099cf5832a98b4d",
"assets/assets/images/CofePaul01.jpg": "b635b276ebffc4ad1e359b1e54a471d0",
"assets/assets/images/CofePaul02.jpg": "d7089c1c2679b35392a2771be4458a74",
"assets/assets/images/CofePoolBar01.jpg": "728e94be58703b3348cb01a2c6c0cdd1",
"assets/assets/images/CofePoolBar02.jpg": "ad9de50041f8a6a55ea7542b45398480",
"assets/assets/images/CofePoolBar03.jpg": "4288bb73e947d06598ea89ce7be0b922",
"assets/assets/images/CofeSaif01.jpeg": "a7e202f6565d8a07164ab1890e4764e9",
"assets/assets/images/CofeSaif02.jpeg": "3d1fb416f848a35b83a77cec774e2262",
"assets/assets/images/CofeSaif03.jpeg": "bebd532da04b9a72013ef76212dfc785",
"assets/assets/images/CofeVeranda01.jpg": "50114455e5cc6c5c4d5a7633b3101c64",
"assets/assets/images/CofeVeranda02.jpg": "32376c9192c2800216e1b88c9f9cee77",
"assets/assets/images/CofeVeranda03.jpg": "59934d2bb241f8df6158181aba427de5",
"assets/assets/images/CofeVeranda04.jpg": "387b11b745be5c45c74e0b138d542f51",
"assets/assets/images/companyLogo.png": "fcf931b5cf46dbee5868319e1c9ea6fa",
"assets/assets/images/cruise1.jpg": "a0b77af439cec2b719dd192c26cf6eaa",
"assets/assets/images/cruise2.jpg": "523adddf955682d6bbab96d70f507d25",
"assets/assets/images/cruise3.jpg": "59ce4d08793f417416ef981e0d99281d",
"assets/assets/images/cruise4.jpg": "328c43ddce0f77d830bb2fed3296c924",
"assets/assets/images/cruise5.jpg": "a2044738d11c278ab52db211d08be0a1",
"assets/assets/images/DeluxeKingRoom.jpg": "73f29f132715139981f396efc5b0603a",
"assets/assets/images/DeluxeSuitekingbed.JPG": "0d159e8e13f78ac7f7b50844feb83b66",
"assets/assets/images/DeluxeSuitetwoBedroom1.JPG": "7ce4932cc8efeb785e65ec96c5c875b0",
"assets/assets/images/DentAbha.jpg": "921a654cf48b275868ef7d9ad6be1a22",
"assets/assets/images/DentBasma.jpg": "1c48d303fd368efff54a55d6d9add201",
"assets/assets/images/DentBasma2.jpg": "d1660bfbc5aad60b6bd3fc8ba9beb8ee",
"assets/assets/images/DentBasma3.jpg": "fdf901efc01cd9e70a4993601db69a6a",
"assets/assets/images/flightTicketing1.jpg": "5b70b51d80bbe222ef81ccb7e2707d1f",
"assets/assets/images/flightTicketing2.jpg": "619303d61069ad7935bff2b04bdf4286",
"assets/assets/images/flightTicketing3.jpg": "d1642baaeb2f4e373e270496f221a635",
"assets/assets/images/flightTicketing4.jpg": "1e7d2367ad02163f7ef68947a936ef5c",
"assets/assets/images/flightTicketing5.jpg": "4a40f375c2a28ef435eef2540fd9f264",
"assets/assets/images/Gym01.jpg": "75264f2880b1682e08b816066fe6c151",
"assets/assets/images/Gym02.jpg": "089a36be4c6d5b396529ebe9f2c48b75",
"assets/assets/images/Gym03.jpg": "61918c557d411a6bd924614b15242960",
"assets/assets/images/hero_bg.jpeg": "e1aea602aab2213c1a9d0d3fc85a6475",
"assets/assets/images/hotel1.jpg": "32ce6b08c909f433e6c3512aa3d8b7ac",
"assets/assets/images/hotel2.jpg": "6c86b09cb7d10714986a9bdfa2a1e0f4",
"assets/assets/images/hotel3.jpg": "2b7b6bea5715046bd2988085c26fae1c",
"assets/assets/images/hotel4.jpg": "e65f48c90e4635e62c04a6d78da5da3c",
"assets/assets/images/hotel5.jpg": "87570fd0cdd899115692d09a55de6e86",
"assets/assets/images/HotelMissoni02.jpg": "fa765b49c51b10f5aedbbef568507a03",
"assets/assets/images/HotelMovenpick03.jpg": "2c1e8160238efaa607c3ed30e3a99cce",
"assets/assets/images/HotelMovenpick04.jpg": "c28cebf76fd080bb240c297adb960d77",
"assets/assets/images/HotelSymphony01.jpg": "da485b9dcf3562260dc032adcffaddd0",
"assets/assets/images/in.jpeg": "09853fa4706f136a32dc6d4a034d7588",
"assets/assets/images/international-in.webp": "1c8396c5c3f1543d2581177415d39978",
"assets/assets/images/international-out.jpg": "0c98dfddbd5cd84d387b814adac94dad",
"assets/assets/images/kout01.jpg": "1c86bbff998888f378e9fbb6d9c2ed38",
"assets/assets/images/kout02.JPG": "381c76a6fadf1dbb0a793816d88aacdf",
"assets/assets/images/kout03.jpg": "ccfaae587fcbb4d29188eb4ebd2c09cc",
"assets/assets/images/kout04.JPG": "10a7f090410dec17e354e1f38e33a5ac",
"assets/assets/images/kout05.jpg": "94c2d0958391e30708d8ac13a47d51c0",
"assets/assets/images/kout06.JPG": "7bb8b292c9bef620db182610f948ead0",
"assets/assets/images/kout07.jpeg": "867072f2fec75e16312b0a2585be291d",
"assets/assets/images/kout08.jpeg": "d818c7de223285f90b5246c87e336fc5",
"assets/assets/images/kout09.jpeg": "92e45858f83a930e6bfe3f1e8798d10c",
"assets/assets/images/Kuwait-in.jpg": "c64db6304a327b3cc5a67f734e7e2ba5",
"assets/assets/images/kuwait.webp": "b63637ff0d13d2c139612df8413cde15",
"assets/assets/images/KuwaitCity-out.jpg": "b2dbbb2c2279470f11a2fb581ab6e2d9",
"assets/assets/images/Lab01.jpg": "ef84ed23b82818c28203d452f498fcee",
"assets/assets/images/Lab02.jpg": "320b44ffa9b0cd131d762ebc496364ad",
"assets/assets/images/Li1.jpeg": "e9fa6d30c96ae8d9ae86987c487ce4da",
"assets/assets/images/Li2.jpeg": "fff59ea77eefa0ea15ba024621dd56f5",
"assets/assets/images/Li3.jpeg": "4f6b4433b4d6dd12d00eca713999ebec",
"assets/assets/images/Li4.jpeg": "f7a22afe9989f96abd42e2a8709e6e0e",
"assets/assets/images/Li5.jpeg": "36c45b03cb96362652c510a7f99f4e2a",
"assets/assets/images/Logo.png": "6856ae916fba2325a2005fd0c76c8346",
"assets/assets/images/logoInAdminInLogin.jpeg": "28b2038dc89af59f885cea2dfb7ea4cd",
"assets/assets/images/Med01.jpeg": "8de2c7e7aec6ad8d9b6a27fed354d66b",
"assets/assets/images/Med02.jpeg": "1489592ebf5959d7353fa5f5e4ae2e7a",
"assets/assets/images/Num01.jpeg": "d17c7297b1e3ee4e21c32c2b08874831",
"assets/assets/images/Num02.jpeg": "15935d5e5e1c28c3d7bea2bc0fcd483f",
"assets/assets/images/Num03.jpeg": "01a9975c5f52124951f45a6e6bb1959b",
"assets/assets/images/Num04.jpeg": "40e52e51bb6afe8bd9d0dcc83699d9c2",
"assets/assets/images/one.png": "3e446c4a9132deef2ba325b5e96a6664",
"assets/assets/images/Pharm01.jpg": "506c0963deec038619531d225b30b89f",
"assets/assets/images/Pharm02.jpg": "4c2c66ecef23c331c9512f216d9119ee",
"assets/assets/images/Poolview.JPG": "0626edbb1b862f0d72b62685e52685aa",
"assets/assets/images/ResBeldani01.jpg": "f7bda91ab804f0825fd7e8753bd5e964",
"assets/assets/images/ResBeldani02.jpg": "01754d38a7953bf94a52db738a1a1fe5",
"assets/assets/images/ResBeldani03.webp": "611bd6e73690837003bc746a44986b46",
"assets/assets/images/ResBeldani04.jpg": "592b38fa0ec4c0b66f32ab6e4df76f0f",
"assets/assets/images/ResBreez01.JPG": "7d56ab4c19889942036bd970ab5c7601",
"assets/assets/images/ResBreez02.jpg": "96933f6c7dd44aef7f033a947773b12c",
"assets/assets/images/ResBreez03.jpg": "052bb5b20b331b67cbafb0bb466f2393",
"assets/assets/images/ResBreez04.jpg": "ba0332a431d9cfa3538f5c004fc051ba",
"assets/assets/images/ResCuciena01.jpg": "0fe9d4bf7742c944c996e1ab50b7ab81",
"assets/assets/images/ResCuciena02.jpg": "f53a3132590b0993ddd3e4f62cf4fc95",
"assets/assets/images/ResCuciena03.jpg": "e8e258e068df0a998b5c099cb0b8df26",
"assets/assets/images/resort1.jpg": "f9e19a522abad34568dd12138a8a8bbf",
"assets/assets/images/resort2.jpg": "e2a75857ae5e4f8109e2421fc2aeb2d8",
"assets/assets/images/resort3.jpg": "4f25279736efcc69a806682924d13a80",
"assets/assets/images/resort4.jpg": "21a352a9e71812cc7b9e1fd2851e6bfb",
"assets/assets/images/resort5.jpg": "6a519f5204a8c0e2287eb47c6ab994e8",
"assets/assets/images/resort6.jpg": "5ec020e7c3b64beff4e8f62b817c335d",
"assets/assets/images/ResTajien01.jpg": "314c3f6dd54ee91178bd9b5003780647",
"assets/assets/images/ResTajien02.jpg": "c1fe3b6a3d5f0e3808aa466b27b6b6d9",
"assets/assets/images/ResTajien03.jpg": "8c1dec5904cf5886ed8717bf1e58b19f",
"assets/assets/images/ResTajien04.jpg": "18fd471264c61f3b458311611bcf88fe",
"assets/assets/images/ResTajien05.jpg": "eac78ba507024a5a9073f3b3f366ecd0",
"assets/assets/images/RestAlkout01.jpeg": "09a696e5139ac512e3e2a243281fa047",
"assets/assets/images/RestAlkout02.jpeg": "5bff3c7499c772f20df3b09f7d581b2b",
"assets/assets/images/RestAlkout03.jpeg": "eb8b5c1eed50d8ba7a96f8acef1a6b56",
"assets/assets/images/RestAlkout04.jpeg": "5bff3c7499c772f20df3b09f7d581b2b",
"assets/assets/images/RestAlkout05.jpeg": "4c810a57cb0738525a4eed2ea4f771bd",
"assets/assets/images/RestAlkout06.jpeg": "230442c0293aa46d90ffe4aa2882b052",
"assets/assets/images/RestAlkout07.jpeg": "0c0838903abfce4bc356303ce5a0004e",
"assets/assets/images/Salon01.jpg": "2ab71885aae7b3dc40504cf7b0b6ed73",
"assets/assets/images/Salon02.jpg": "3bfbfaa35d8648b2c17cd8737e813af0",
"assets/assets/images/Salon03.jpg": "fe12023b251392cb18a716c288d22224",
"assets/assets/images/Seaview.jpg": "4ffb6fe9879cf4a9d6ceaedc94ec9f42",
"assets/assets/images/social.png": "1da1618b88bbbb6a0aa49985c76f71c8",
"assets/assets/images/SPA01.jpg": "0d508da9613157d30bb8e8d40dfde2f1",
"assets/assets/images/SPA02.jpg": "d081d322558e9d7b487bc6dec2cde590",
"assets/assets/images/SPA03.jpg": "6db40d018c6821a41db5a099175f479a",
"assets/assets/images/sym1.jpg": "1976400e5ddcac7376e819ab46876028",
"assets/assets/images/sym2.jpg": "618f7d1147a7c08a1ef51e195ce53415",
"assets/assets/images/sym3.jpg": "670d493a8c57c37677152c89a7b9e64f",
"assets/assets/images/sym4.jpg": "38472e4535a7650646219cacf0290e9f",
"assets/assets/images/sym5.jpg": "278874cfd7c50bb283f0c8ab6fe06594",
"assets/assets/images/sym6.jpg": "9a8ab276900cfd851d2869271d524f52",
"assets/assets/images/sym7.jpg": "10a669ffc9f6444387cfe414fe053f8b",
"assets/assets/images/sym8.jpg": "a95b78d03b9c179bee426c81bf930c99",
"assets/assets/images/sym9.jpg": "db699b2f17791e9dfa6f4afa70654984",
"assets/assets/images/tours1.jpg": "486b4e4f557c7c7fa72eb2d4c15f4e0b",
"assets/assets/images/tours2.jpg": "44bcc56cc19764d251f7b6e948b05864",
"assets/assets/images/tours3.jpg": "ca5a1bcecf06854ab3439a0660a9cd4e",
"assets/assets/images/tours4.jpg": "a552822f23c96ae71b25fa74c344da12",
"assets/assets/images/tours5.jpg": "352778459ad94a780fac8ea73d34036b",
"assets/assets/images/train1.jpg": "4e99c755a459d37c30c5406c967731a6",
"assets/assets/images/train2.jpg": "cf72562221ef18cd2ffe56303015da98",
"assets/assets/images/train3.jpg": "621442d84c0440cae66665d8453615c5",
"assets/assets/images/Trans1.jpg": "cc99f3e3b3c78e9178b3795b3b17a2fc",
"assets/assets/images/Trans2.jpg": "19c912703aacc130240c10f2c06b2d3c",
"assets/assets/images/Trans3.jpg": "938d0d969acb9d4ce3cab93d55874433",
"assets/assets/images/VillaLiving3.JPG": "135159c6fc4ab175aeb7a15e01d7fc17",
"assets/assets/images/VillaMasterroom(2).JPG": "4d14d1067918385470bc0bbd343cdf9a",
"assets/assets/images/Villatwinroom.JPG": "ba83a1793d7e46aba95773cae6dc7002",
"assets/assets/videos/videoInHome.mp4": "afe8019bfff59c8a519805bdb5cbb039",
"assets/FontManifest.json": "b0fea49edd58860cfa75aed78726af03",
"assets/fonts/MaterialIcons-Regular.otf": "490c0954cdeb083b66433015a3e10832",
"assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/images/01.jpeg": "a7e202f6565d8a07164ab1890e4764e9",
"assets/images/02.jpeg": "3d1fb416f848a35b83a77cec774e2262",
"assets/images/03.jpeg": "8055630836f4f8aabeac5de152601d2d",
"assets/images/04.jpeg": "bebd532da04b9a72013ef76212dfc785",
"assets/images/1.jpeg": "b1dd831bac2c6927e317dbd85619f932",
"assets/images/10.jpeg": "7d68dc647394ebceedaaa86b83ef0dd5",
"assets/images/11.jpeg": "7b34ebe3aa2a5e601b3ab519a6fa2337",
"assets/images/12.jpeg": "27aa62030af3561b52cd055423f38963",
"assets/images/13.jpeg": "3c451eb7688c1a10c114b67396244901",
"assets/images/2.jpeg": "815cfdb596ecd8d8b0c25b773e1c8997",
"assets/images/3.jpeg": "38a149d10b7eae33f6028eed134ea99a",
"assets/images/3BDLiving.JPG": "9b2d7142f718d97c7668c0fdf5d6e602",
"assets/images/3BDMaster2.JPG": "b003819e451188b2e3a8495d81cdd16c",
"assets/images/4.jpeg": "4055a244b544f8a56f0b23571728ba23",
"assets/images/5.jpeg": "b0990de23c651b3d8b796d87c05cf634",
"assets/images/6.jpeg": "3617ae6fda3f69090a154b96eac6acf4",
"assets/images/7.jpeg": "4ad27fa1ff379bb02e08c9c976f3fe0e",
"assets/images/8.jpeg": "e90cd715922373fc72887abea9c6d585",
"assets/images/9.jpeg": "c9041d4912c8be47def31425974fa784",
"assets/images/activities1.jpg": "1d31020814efc696d2a86ce699a645ea",
"assets/images/activities2.jpg": "dd9e1826ff0e9eeec92e904ff8e39566",
"assets/images/activities3.jpg": "9c3eae26cdca7b4a5391f434c83df985",
"assets/images/activities4.jpg": "5bf75ce4937edf766a9350ce7a490161",
"assets/images/activities5.jpg": "f236445fe9eadef8c16e6ea2de141aca",
"assets/images/appLogo.webp": "f7dae488e23ecedc6fab1d5b86392a71",
"assets/images/banner1.jpg": "061fbdafdde948ea47e466f9b6fc2255",
"assets/images/banner10.jpg": "6daacba3eadff1e87cc8628f360e72f1",
"assets/images/banner11.jpg": "7642be93b05c80805c812c10638acdd2",
"assets/images/banner12.jpg": "632eea55614efd0b44280e5bec2ea9ad",
"assets/images/banner13.jpg": "e6638d462442f93cb6fc878342c8ff96",
"assets/images/banner2.jpg": "a7e064d10a88eedc50109b697a346716",
"assets/images/banner3.jpg": "8573542d2334e7354d09278c9a17134d",
"assets/images/banner4.jpg": "a96dfa1c5e1f6d9c0f8aced10d33e908",
"assets/images/banner5.jpg": "56bc261ccdca3e92e775e559a37ead2d",
"assets/images/banner6.jpg": "26b6ac226c0e793ec169b64752bdb8d8",
"assets/images/banner7.jpg": "9f6dcc0e32720ebe7d104c52ea9b6667",
"assets/images/banner8.jpg": "e6e52282429c2fb06c75442671188622",
"assets/images/banner9.jpg": "604b1b215cd806d38e7b5b34a7d5188c",
"assets/images/carRental1.jpg": "888df9bd4083d01981b2b3274fe2d80e",
"assets/images/carRental2.jpg": "29aef2214c71930ed2eee3274f277de3",
"assets/images/carRental3.jpg": "646904a012d9f11a9e640473446a3bb8",
"assets/images/carRental4.jpg": "31aa69ba8c152b07782239322559a704",
"assets/images/CofeChoco01.jpg": "87928813f979e0c5ca885494915f6bde",
"assets/images/CofeChoco02.jpg": "c8bd89d6956b1422d9e5f0be8856bd9d",
"assets/images/CofeChoco03.jpg": "88e5016d355b720aa21d44f1a308c05a",
"assets/images/CofeChoco04.jpg": "64b55aee1be1a6cf2099cf5832a98b4d",
"assets/images/CofePaul01.jpg": "b635b276ebffc4ad1e359b1e54a471d0",
"assets/images/CofePaul02.jpg": "d7089c1c2679b35392a2771be4458a74",
"assets/images/CofePoolBar01.jpg": "728e94be58703b3348cb01a2c6c0cdd1",
"assets/images/CofePoolBar02.jpg": "ad9de50041f8a6a55ea7542b45398480",
"assets/images/CofePoolBar03.jpg": "4288bb73e947d06598ea89ce7be0b922",
"assets/images/CofeSaif01.jpeg": "a7e202f6565d8a07164ab1890e4764e9",
"assets/images/CofeSaif02.jpeg": "3d1fb416f848a35b83a77cec774e2262",
"assets/images/CofeSaif03.jpeg": "bebd532da04b9a72013ef76212dfc785",
"assets/images/CofeVeranda01.jpg": "50114455e5cc6c5c4d5a7633b3101c64",
"assets/images/CofeVeranda02.jpg": "32376c9192c2800216e1b88c9f9cee77",
"assets/images/CofeVeranda03.jpg": "59934d2bb241f8df6158181aba427de5",
"assets/images/CofeVeranda04.jpg": "387b11b745be5c45c74e0b138d542f51",
"assets/images/companyLogo.png": "fcf931b5cf46dbee5868319e1c9ea6fa",
"assets/images/cruise1.jpg": "a0b77af439cec2b719dd192c26cf6eaa",
"assets/images/cruise2.jpg": "523adddf955682d6bbab96d70f507d25",
"assets/images/cruise3.jpg": "59ce4d08793f417416ef981e0d99281d",
"assets/images/cruise4.jpg": "328c43ddce0f77d830bb2fed3296c924",
"assets/images/cruise5.jpg": "a2044738d11c278ab52db211d08be0a1",
"assets/images/DeluxeKingRoom.jpg": "73f29f132715139981f396efc5b0603a",
"assets/images/DeluxeSuitekingbed.JPG": "0d159e8e13f78ac7f7b50844feb83b66",
"assets/images/DeluxeSuitetwoBedroom1.JPG": "7ce4932cc8efeb785e65ec96c5c875b0",
"assets/images/DentAbha.jpg": "921a654cf48b275868ef7d9ad6be1a22",
"assets/images/DentBasma.jpg": "1c48d303fd368efff54a55d6d9add201",
"assets/images/DentBasma2.jpg": "d1660bfbc5aad60b6bd3fc8ba9beb8ee",
"assets/images/DentBasma3.jpg": "fdf901efc01cd9e70a4993601db69a6a",
"assets/images/flightTicketing1.jpg": "5b70b51d80bbe222ef81ccb7e2707d1f",
"assets/images/flightTicketing2.jpg": "619303d61069ad7935bff2b04bdf4286",
"assets/images/flightTicketing3.jpg": "d1642baaeb2f4e373e270496f221a635",
"assets/images/flightTicketing4.jpg": "1e7d2367ad02163f7ef68947a936ef5c",
"assets/images/flightTicketing5.jpg": "4a40f375c2a28ef435eef2540fd9f264",
"assets/images/Gym01.jpg": "75264f2880b1682e08b816066fe6c151",
"assets/images/Gym02.jpg": "089a36be4c6d5b396529ebe9f2c48b75",
"assets/images/Gym03.jpg": "61918c557d411a6bd924614b15242960",
"assets/images/hero_bg.jpeg": "e1aea602aab2213c1a9d0d3fc85a6475",
"assets/images/hotel1.jpg": "32ce6b08c909f433e6c3512aa3d8b7ac",
"assets/images/hotel2.jpg": "6c86b09cb7d10714986a9bdfa2a1e0f4",
"assets/images/hotel3.jpg": "2b7b6bea5715046bd2988085c26fae1c",
"assets/images/hotel4.jpg": "e65f48c90e4635e62c04a6d78da5da3c",
"assets/images/hotel5.jpg": "87570fd0cdd899115692d09a55de6e86",
"assets/images/HotelMissoni02.jpg": "fa765b49c51b10f5aedbbef568507a03",
"assets/images/HotelMovenpick03.jpg": "2c1e8160238efaa607c3ed30e3a99cce",
"assets/images/HotelMovenpick04.jpg": "c28cebf76fd080bb240c297adb960d77",
"assets/images/HotelSymphony01.jpg": "da485b9dcf3562260dc032adcffaddd0",
"assets/images/in.jpeg": "09853fa4706f136a32dc6d4a034d7588",
"assets/images/international-in.webp": "1c8396c5c3f1543d2581177415d39978",
"assets/images/international-out.jpg": "0c98dfddbd5cd84d387b814adac94dad",
"assets/images/kout01.jpg": "1c86bbff998888f378e9fbb6d9c2ed38",
"assets/images/kout02.JPG": "381c76a6fadf1dbb0a793816d88aacdf",
"assets/images/kout03.jpg": "ccfaae587fcbb4d29188eb4ebd2c09cc",
"assets/images/kout04.JPG": "10a7f090410dec17e354e1f38e33a5ac",
"assets/images/kout05.jpg": "94c2d0958391e30708d8ac13a47d51c0",
"assets/images/kout06.JPG": "7bb8b292c9bef620db182610f948ead0",
"assets/images/kout07.jpeg": "867072f2fec75e16312b0a2585be291d",
"assets/images/kout08.jpeg": "d818c7de223285f90b5246c87e336fc5",
"assets/images/kout09.jpeg": "92e45858f83a930e6bfe3f1e8798d10c",
"assets/images/Kuwait-in.jpg": "c64db6304a327b3cc5a67f734e7e2ba5",
"assets/images/kuwait.webp": "b63637ff0d13d2c139612df8413cde15",
"assets/images/KuwaitCity-out.jpg": "b2dbbb2c2279470f11a2fb581ab6e2d9",
"assets/images/Lab01.jpg": "ef84ed23b82818c28203d452f498fcee",
"assets/images/Lab02.jpg": "320b44ffa9b0cd131d762ebc496364ad",
"assets/images/Li1.jpeg": "e9fa6d30c96ae8d9ae86987c487ce4da",
"assets/images/Li2.jpeg": "fff59ea77eefa0ea15ba024621dd56f5",
"assets/images/Li3.jpeg": "4f6b4433b4d6dd12d00eca713999ebec",
"assets/images/Li4.jpeg": "f7a22afe9989f96abd42e2a8709e6e0e",
"assets/images/Li5.jpeg": "36c45b03cb96362652c510a7f99f4e2a",
"assets/images/Logo.png": "6856ae916fba2325a2005fd0c76c8346",
"assets/images/logoInAdminInLogin.jpeg": "28b2038dc89af59f885cea2dfb7ea4cd",
"assets/images/Med01.jpeg": "8de2c7e7aec6ad8d9b6a27fed354d66b",
"assets/images/Med02.jpeg": "1489592ebf5959d7353fa5f5e4ae2e7a",
"assets/images/Movenpick%2520text.docx": "188fc430d2df49734363051d2f206a05",
"assets/images/Num01.jpeg": "d17c7297b1e3ee4e21c32c2b08874831",
"assets/images/Num02.jpeg": "15935d5e5e1c28c3d7bea2bc0fcd483f",
"assets/images/Num03.jpeg": "01a9975c5f52124951f45a6e6bb1959b",
"assets/images/Num04.jpeg": "40e52e51bb6afe8bd9d0dcc83699d9c2",
"assets/images/one.png": "3e446c4a9132deef2ba325b5e96a6664",
"assets/images/Pharm01.jpg": "506c0963deec038619531d225b30b89f",
"assets/images/Pharm02.jpg": "4c2c66ecef23c331c9512f216d9119ee",
"assets/images/Poolview.JPG": "0626edbb1b862f0d72b62685e52685aa",
"assets/images/ResBeldani01.jpg": "f7bda91ab804f0825fd7e8753bd5e964",
"assets/images/ResBeldani02.jpg": "01754d38a7953bf94a52db738a1a1fe5",
"assets/images/ResBeldani03.webp": "611bd6e73690837003bc746a44986b46",
"assets/images/ResBeldani04.jpg": "592b38fa0ec4c0b66f32ab6e4df76f0f",
"assets/images/ResBreez01.JPG": "7d56ab4c19889942036bd970ab5c7601",
"assets/images/ResBreez02.jpg": "96933f6c7dd44aef7f033a947773b12c",
"assets/images/ResBreez03.jpg": "052bb5b20b331b67cbafb0bb466f2393",
"assets/images/ResBreez04.jpg": "ba0332a431d9cfa3538f5c004fc051ba",
"assets/images/ResCuciena01.jpg": "0fe9d4bf7742c944c996e1ab50b7ab81",
"assets/images/ResCuciena02.jpg": "f53a3132590b0993ddd3e4f62cf4fc95",
"assets/images/ResCuciena03.jpg": "e8e258e068df0a998b5c099cb0b8df26",
"assets/images/resort1.jpg": "f9e19a522abad34568dd12138a8a8bbf",
"assets/images/resort2.jpg": "e2a75857ae5e4f8109e2421fc2aeb2d8",
"assets/images/resort3.jpg": "4f25279736efcc69a806682924d13a80",
"assets/images/resort4.jpg": "21a352a9e71812cc7b9e1fd2851e6bfb",
"assets/images/resort5.jpg": "6a519f5204a8c0e2287eb47c6ab994e8",
"assets/images/resort6.jpg": "5ec020e7c3b64beff4e8f62b817c335d",
"assets/images/ResTajien01.jpg": "314c3f6dd54ee91178bd9b5003780647",
"assets/images/ResTajien02.jpg": "c1fe3b6a3d5f0e3808aa466b27b6b6d9",
"assets/images/ResTajien03.jpg": "8c1dec5904cf5886ed8717bf1e58b19f",
"assets/images/ResTajien04.jpg": "18fd471264c61f3b458311611bcf88fe",
"assets/images/ResTajien05.jpg": "eac78ba507024a5a9073f3b3f366ecd0",
"assets/images/RestAlkout01.jpeg": "09a696e5139ac512e3e2a243281fa047",
"assets/images/RestAlkout02.jpeg": "5bff3c7499c772f20df3b09f7d581b2b",
"assets/images/RestAlkout03.jpeg": "eb8b5c1eed50d8ba7a96f8acef1a6b56",
"assets/images/RestAlkout04.jpeg": "5bff3c7499c772f20df3b09f7d581b2b",
"assets/images/RestAlkout05.jpeg": "4c810a57cb0738525a4eed2ea4f771bd",
"assets/images/RestAlkout06.jpeg": "230442c0293aa46d90ffe4aa2882b052",
"assets/images/RestAlkout07.jpeg": "0c0838903abfce4bc356303ce5a0004e",
"assets/images/Salon01.jpg": "2ab71885aae7b3dc40504cf7b0b6ed73",
"assets/images/Salon02.jpg": "3bfbfaa35d8648b2c17cd8737e813af0",
"assets/images/Salon03.jpg": "fe12023b251392cb18a716c288d22224",
"assets/images/Seaview.jpg": "4ffb6fe9879cf4a9d6ceaedc94ec9f42",
"assets/images/social.png": "1da1618b88bbbb6a0aa49985c76f71c8",
"assets/images/SPA01.jpg": "0d508da9613157d30bb8e8d40dfde2f1",
"assets/images/SPA02.jpg": "d081d322558e9d7b487bc6dec2cde590",
"assets/images/SPA03.jpg": "6db40d018c6821a41db5a099175f479a",
"assets/images/sym1.jpg": "1976400e5ddcac7376e819ab46876028",
"assets/images/sym2.jpg": "618f7d1147a7c08a1ef51e195ce53415",
"assets/images/sym3.jpg": "670d493a8c57c37677152c89a7b9e64f",
"assets/images/sym4.jpg": "38472e4535a7650646219cacf0290e9f",
"assets/images/sym5.jpg": "278874cfd7c50bb283f0c8ab6fe06594",
"assets/images/sym6.jpg": "9a8ab276900cfd851d2869271d524f52",
"assets/images/sym7.jpg": "10a669ffc9f6444387cfe414fe053f8b",
"assets/images/sym8.jpg": "a95b78d03b9c179bee426c81bf930c99",
"assets/images/sym9.jpg": "db699b2f17791e9dfa6f4afa70654984",
"assets/images/tours1.jpg": "486b4e4f557c7c7fa72eb2d4c15f4e0b",
"assets/images/tours2.jpg": "44bcc56cc19764d251f7b6e948b05864",
"assets/images/tours3.jpg": "ca5a1bcecf06854ab3439a0660a9cd4e",
"assets/images/tours4.jpg": "a552822f23c96ae71b25fa74c344da12",
"assets/images/tours5.jpg": "352778459ad94a780fac8ea73d34036b",
"assets/images/train1.jpg": "4e99c755a459d37c30c5406c967731a6",
"assets/images/train2.jpg": "cf72562221ef18cd2ffe56303015da98",
"assets/images/train3.jpg": "621442d84c0440cae66665d8453615c5",
"assets/images/Trans1.jpg": "cc99f3e3b3c78e9178b3795b3b17a2fc",
"assets/images/Trans2.jpg": "19c912703aacc130240c10f2c06b2d3c",
"assets/images/Trans3.jpg": "938d0d969acb9d4ce3cab93d55874433",
"assets/images/VillaLiving3.JPG": "135159c6fc4ab175aeb7a15e01d7fc17",
"assets/images/VillaMasterroom(2).JPG": "4d14d1067918385470bc0bbd343cdf9a",
"assets/images/Villatwinroom.JPG": "ba83a1793d7e46aba95773cae6dc7002",
"assets/NOTICES": "4b6506e1e1a02c3a0f7562752255eb05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/videos/videoInHome.mp4": "afe8019bfff59c8a519805bdb5cbb039",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "a1f9a0be2f1fcc55750a36dc454760d4",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "1ce433606756555e277f83fbe002d223",
"icons/Icon-192.png": "1a39e0f26e71bcdf5bbe7ce35bad92b4",
"icons/Icon-512.png": "f23f603aa4c19a458dfffa3e44ff48b1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a109b8891fe5f0049e59eda348da0ca6",
"/": "a109b8891fe5f0049e59eda348da0ca6",
"main.dart.js": "6117a9935732d16a8b8895456398243c",
"manifest.json": "9f4b9f6abe5847c78dae0af0202a7305",
"version.json": "dfa256ecce1ccbb247baafac190a3670"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
