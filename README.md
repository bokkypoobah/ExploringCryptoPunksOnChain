# Exploring CryptoPunks On-Chain

See https://bokkypoobah.github.io/ExploringCryptoPunksOnChain/ .

<br />

<hr />

### Extracting Image Setup Data From Mainnet

In [scripts](scripts):

```
$ node 02_generateSetupData.js
Processing 0 of 265 0xa92ea3630a13abf3a7322043406df32744c8dc3db1107cf8e244506fba8b284c setPalette
Processing 1 of 265 0x9ab747363dfc1ff30bb49d658de1b478c58df8f1e4b882816a3192835542c335 addComposites
Processing 2 of 265 0xbbe44426feae1117f0d8e5b5b11d6d5c765a746b45234b33d433a4aeb6be5166 addComposites
Processing 3 of 265 0x2e0e57c012747a7814766f452cb43f564a4933ade24b257edf9efc176c149aa7 addComposites
Processing 4 of 265 0x4f3eec9351457628da397723c29047d21e712359c2de69049de82987dc07e651 addComposites
Processing 5 of 265 0x46dff24a49d559263ef6aa6e3f709260d73c44d49363c50a84852d2233104df4 addComposites
Processing 6 of 265 0x80f4123d4ad64aecd6f34925ba959984a382c1e89898b2e856a6b444c37a5f56 addComposites
Processing 7 of 265 0x3895c22172f06fd454a50a556ef9498c737e529eacd47f4aa2b212905024f0a4 addComposites
Processing 8 of 265 0x1638ed2085831da1d28a6eb262fb6c12b7b70ea62caf61bea583da5069c92b11 addComposites
Processing 9 of 265 0x7e36e1eaf46049f74b86de34468e7e5ced2d33486674ca375cc251cf012c922d addComposites
Processing 10 of 265 0x63bd0b2f976c47eeff3d863a8ee2ec7c34e006a49f08692f7531b343f4a0a676 addComposites
Processing 11 of 265 0x508f87575aa657bccc8a35ef52ae850c3480ebb2c0081ad74f6f220641c2d15b addComposites
Processing 12 of 265 0xc3c647e14d6f8bea946fb3c09d79b0a7e9d90ab99e729c00a4b478a72310eb50 addComposites
Processing 13 of 265 0x756b024030c15a277c51048fba8eba187ad493814efca534e5c7c3e6122d67b2 addComposites
Processing 14 of 265 0xc5e86ab6b909f6f68c7332a3fe08e6f434090124b500455a1b7d144918e7d061 addComposites
Processing 15 of 265 0xbfbc148c5513f15730bd6a71b7d1efc7b24606ea479ec10142333b174b42a194 addComposites
Processing 16 of 265 0x0e859f563da356dbb24cdf258c2ffeb7a47aea9bc9cf3d6ce5062750b7c8faea addComposites
Processing 17 of 265 0xd5b34182db873659c34da63361144c80cb78d32362e2338af9ad1c287214f9f2 addComposites
Processing 18 of 265 0xb5b57459c8440a2de9fb35bb033600cb3f7db974dd7119a9d8e13cb2201e4931 addComposites
Processing 19 of 265 0xfeedfbcd87cee07863e1fdbd73841ff47a0d8395ddf121c8fb5d79328de43655 addComposites
Processing 20 of 265 0x4289687a930e92f7a550313818a1d956ff5e8911f83e5a694a2e84024d9bd468 addComposites
Processing 21 of 265 0xc10e51b082fc21fa883aad7250edce9ebe7ef76e1f417071f23eb059e5007ad2 addComposites
Processing 22 of 265 0x01abde4ef521994e9f18f950537307f78186ffc1d337d8fd271c879eced9a063 addComposites
Processing 23 of 265 0xbfee8c3af30d6a7267699b4cfd409cdd2aa831feb41493ea6749d62e84962083 addComposites
Processing 24 of 265 0xed4337476b02a0073e05c4c6a1a6d66d391a69eb2ae9f7e1b920bbc508999377 addComposites
Processing 25 of 265 0xd840ced067078ec82cd59f9b0db99550b53983dfd6f5f6ef677b80d7b84ace32 addComposites
Processing 26 of 265 0x8865898d2dacc27f532258b6c1b9fdd81b93a6768d6f7101a89fa386f9e5d499 addComposites
Processing 27 of 265 0xd9e4070223a21631af6810a756931ca8d0c4e246d7db79fb63b49de0352cdc00 addComposites
Processing 28 of 265 0x137f8a979dccb08d14cbc157ee6a2c06856c23e0e6e1b19a302d25e2a4bd337f addComposites
Processing 29 of 265 0x336549d624bbff3ff357ec9bd74e3094eb7e74d48f7df27bc603819328dcc4d8 addComposites
Processing 30 of 265 0xbb4054c86923523668a4b2ee78c30c57a598f90191267c861524e0e2fa9904cc addComposites
Processing 31 of 265 0xb73a74730f54ff8a01b4c1489105225e7638abf0452150ca70daa019dfd82692 addAsset
Processing 32 of 265 0xc8699ddd5934caac822b71d5e6ebd002a13957b4fc05a8c75c2e0c77773d1f99 addAsset
Processing 33 of 265 0x0fdc92417bfcf7f836bfe7ee4a0931679b29e18efbb5b1ac0c7955d94064eda0 addAsset
Processing 34 of 265 0xb5c7a03036ba437697afe4ca4e16bf52e1b873aa16a1b018ecafe12f212bdd1b addAsset
Processing 35 of 265 0xf4571aba1fe0a196d68256e33701b5585c59dc0176bd551bdc8f6e014380a636 addAsset
Processing 36 of 265 0xce4b08a7e0e078410782eb61ce3e4bbd0f54204e1e234745b2affad343fb67d0 addAsset
Processing 37 of 265 0xc035c4329ad9ed53dfbbc29cda24b886f70a9f8166cf4ec49dca57f353404781 addAsset
Processing 38 of 265 0x077a4274c477a23bdc8571c4ec9cde77fd75b3be973713428c01f35c50ef0368 addAsset
Processing 39 of 265 0xbe6e1cb36158ada9bb366b36736da6399faa03a665168754c48071515f2b8194 addAsset
Processing 40 of 265 0x611779097d1e8a723a25f736b5306837278a5f094966e129d0428c9a31709069 addAsset
Processing 41 of 265 0x01030a46aabb9fd8550e6620e0ffd71d43c4070b9ac15e4f7a867d54bf9b2854 addAsset
Processing 42 of 265 0xbca849814e1c8d52449b701f50f56c46876d55e74cc46ef04ce3c101df4f784f addAsset
Processing 43 of 265 0xcbece0bd6ed731a12c44d08cf084b32a193e44e27fe9bbbc3adb63ffc555f882 addAsset
Processing 44 of 265 0xa175ac94d68cd83afa660b7147274cd65f65830ac0456e8b75cd65512a66d546 addAsset
Processing 45 of 265 0x3e26a918ec01cc4c73fd49b9c04fdbf7a34986618a37e44cf300ee03410a2b32 addAsset
Processing 46 of 265 0x2f5d7aa913540636ae0c62d350668a6e730b4791c0e73e7186d2e044c0910047 addAsset
Processing 47 of 265 0xa395a1ebfdc64404ab83478a4709e5d1b58e2ac25765fb3ef65e251dc35f92b0 addAsset
Processing 48 of 265 0x8972c6b4a44c972111bf18feccae7cfb26db615be400d1422c0763a1a2b03af5 addAsset
Processing 49 of 265 0xcff57eab655c398dd5efb4d03e276db6e8e15dd7f234ffd22dbc9b7a863a8c44 addAsset
Processing 50 of 265 0xca7417e2e6aab625fb9073143f51cbadc81fa14da4e1cc72a87a1f3bbfd5b3bd addAsset
Processing 51 of 265 0x2508278bf022e3b9b7816576756a0e6404f5a266d4dae871eaa58c171540d3ee addAsset
Processing 52 of 265 0x7da87ee67d2a99d503f61b54843b4ad79a0489e0097c5762aa85d0aac3da21ec addAsset
Processing 53 of 265 0xc0728d6d6010000ecba7a0f118fffccaddfaee73455edd0708936eec7a8de3bf addAsset
Processing 54 of 265 0x742b9e3ad1a4765fa29998494eab48eeaaaf06fbe21e604657a592637679d306 addAsset
Processing 55 of 265 0x8da4a2b9c2359b3577b8b13fca73e8a5068e6ca3b8249398cb99d7bf3de6982f addAsset
Processing 56 of 265 0x36f61054e118e17efe7ac281ee0f14406d7c6ec33129ecbb5536e7da0ae10653 addAsset
Processing 57 of 265 0x026b0d30bf70d56f063ca1020cd1a746440d2ec0057ab449f5aef651decc2043 addAsset
Processing 58 of 265 0xd2e6f7b2882c58c2d99b7aedcdaa49afc25e2264e6cacb76a38d1bae4634604a addAsset
Processing 59 of 265 0xa139c0bad2636d91f297bec3453da0e86a94cec507e270a495661ce391c1e235 addAsset
Processing 60 of 265 0x91784997e0049532402ed63a61e1da7cd473e00607bf824c46d44e9235d8d1e0 addAsset
Processing 61 of 265 0xfd9425cf2a3e7f7178626b9f2fed30ab764431e92a603dcfa1531e10c7188c73 addAsset
Processing 62 of 265 0x3ebf4c7c7c16ba8d6b7c5d57a3d70591d4bf70d38b4088f8e2f75866f751d4cc addAsset
Processing 63 of 265 0xcf67f70e7b299390de4bb6b11bff31b93f183df0527b74fb3f73248973f0c43b addAsset
Processing 64 of 265 0x07907f96bb50ae69a7d5308343b52f3389d8a2d907aa44064d733bc533911e2a addAsset
Processing 65 of 265 0x9c82671d209e8c0b9341cf99a38fce2c49f7e028c8d420282936a02a70c043d0 addAsset
Processing 66 of 265 0xeb4aa945d82da5f56b98d60d44c6397ec3df0e1b7e827f6402551a4a550e319d addAsset
Processing 67 of 265 0x4dc1b03e32a0eef8f526d999e2b3f465554d4040ace51e139d1e0bb78caa8671 addAsset
Processing 68 of 265 0x2eea77b00a8a4b225b23fd60c2efe89433102c7794e6085f0a78a7e007644be6 addAsset
Processing 69 of 265 0x957158a887495a4648f2ee7c467388b1165b4fba84ff85c5bca5b3e5dc603f31 addAsset
Processing 70 of 265 0xe2cf27e86aa7688354b938b822e59a556fb0a5752d8839bd24484f19858f3cea addAsset
Processing 71 of 265 0xcc39f8c7c4324d0559ef4e6541d85b2691d4bd6b24b460b23db3fb406e98a034 addAsset
Processing 72 of 265 0xbcdaafe1f9581a84b39ca83fde81a861eee7b1ea87e4f4243bc134ae2791f3d9 addAsset
Processing 73 of 265 0x8f4e588e2d5e08c6cbbd82452a2b180175efd8d7d89634c534711beb6607c4ec addAsset
Processing 74 of 265 0xc5b6ffd91b0a6fbc082641658ce2eae5b0a71f68a1cdf0c6ae2926bddb491fbd addAsset
Processing 75 of 265 0x1fe84c09b30365797fa47e60bab6ae1e794379ec77a146f56ce59f98d8fb83e1 addAsset
Processing 76 of 265 0x94f7dd2d78a077f5e801b9bb5be2a33007abbfa95ba84d85a854e8fe5df0b3fd addAsset
Processing 77 of 265 0x7da91a71811681a3f51ffccd56998c98caecacc44c07b39f89c26c919892f1e7 addAsset
Processing 78 of 265 0xb2666c9914320d3eb24146387a9e43edcffd89746ef69c9930fc1be34e021d06 addAsset
Processing 79 of 265 0x3bc7578dbc4d9b2b96856f049a3aaca113a8a184687362afecd098ddd48b753c addAsset
Processing 80 of 265 0x113d5ca5e00c42f57f8d9e0e813ee87ae0a730cb02e5e0389327b45f194ac73d addAsset
Processing 81 of 265 0x277caaae19fb5cd86418b313f25d3bf24ac409ba234e17cf4296e7022932caee addAsset
Processing 82 of 265 0x6d9f1b41c73418e2dbc98552af2dd8eef1d080ddf883059d5cdea3bb1b35abf1 addAsset
Processing 83 of 265 0xee3d8560214572c45118f5cc94b8f915965f14cd493e0c19b51bccc83863c0ac addAsset
Processing 84 of 265 0x058957d6438935d0b4dcccbf910a8e5ccf5e34dd6fdd0669b644cbc53db8beff addAsset
Processing 85 of 265 0x919c2b5c97915d13da3c9f40217671343bcc38d39500108dd135829e83cc8d37 addAsset
Processing 86 of 265 0x53204afd836ccf660b9a1550b1d7e443e8eb6cb8a3aa590162106167a22508ae addAsset
Processing 87 of 265 0xc2e0418541b9b16710ddd5e538f5c6fe2b737c6d722180315820ef091e5ad093 addAsset
Processing 88 of 265 0xd6b3ca9eca327ce1cf278795d59ee1ca2ac4f4485945731542cdc370892b3bf6 addAsset
Processing 89 of 265 0xa9c5be3c711d80709d5ce552f62b257a4f47a79a9fb440665567497a93c40785 addAsset
Processing 90 of 265 0x8cc5bbb84a6090ea3ac45bd84070cafa3419886498c0c2b4d1510367470ed0d6 addAsset
Processing 91 of 265 0xa31536cc0705dbb91974660cc97a3ce5e545b1f9b2c45fb63097532ff96559ef addAsset
Processing 92 of 265 0x995c5ba155a125e6f3c192af5672ec372137e691fb577b2aad7b827a8df34cf5 addAsset
Processing 93 of 265 0x392de46160f217dbfb9656443727bf16a1d39221e49eb1e278b0a904039f6704 addAsset
Processing 94 of 265 0x2cff6522c6fb901f6a10a53515e859a0119e180d5011cee2434b751a27f77480 addAsset
Processing 95 of 265 0x3c9736b8f8e95205e8a97ff32d8fea509348723341362462d4e11b3c695bddfc addAsset
Processing 96 of 265 0x25329b38eabd6a634f284d92d827269a9b62818a016953bbef29dae77cecbf06 addAsset
Processing 97 of 265 0x165112dfd77ab3962e1d68d54c500096d3a514654eb57379cbaf390598fd1207 addAsset
Processing 98 of 265 0xf30f678a0c2bade2f17dba33993191807a4236f89fcbf2c81c59ddd3b9540b64 addAsset
Processing 99 of 265 0x4ac84e866c3b04352f584c85987252af3c5cf80ac71433990688e9458d5f3776 addAsset
Processing 100 of 265 0xbc963b54b79a59f015563aed26370e36d4c3589548f40a8420a18f77026c4d56 addAsset
Processing 101 of 265 0xf22a0400a478d25b7c8f544983a6770256f73d17c2cd0a7ce99b8ed32237f101 addAsset
Processing 102 of 265 0xbb646fa184a1adc45428754f3b425fa89d75e4ebfdd6c447a0e66591f602e99f addAsset
Processing 103 of 265 0x9db419b04a87fbb980e01686011dc7db89ef571af23fca96325191006fe61bac addAsset
Processing 104 of 265 0x1389844cc18c4361ff682caafd0bc434c1b1576343baf04307eba4e5b199cc36 addAsset
Processing 105 of 265 0xcc10bf319db303c376080198c8e6ae034754cb69d9f51048d16611b278c35b1c addAsset
Processing 106 of 265 0x174984ed850e5c64aee8ae514515108c686c3c68bbe5196634428f31435b6510 addAsset
Processing 107 of 265 0x36aa77763dcc029821e6f021df4875525a4054a4982357133df1e6c224bb4783 addAsset
Processing 108 of 265 0xfd80eb9850d0340f2ca7d38892718898b242bf2ee07f05f6e14247418623b82d addAsset
Processing 109 of 265 0xb54334ccaf25ecdacca6aff80f8ba3b15d8bf01b0bf0e739ab04913d8434eb6d addAsset
Processing 110 of 265 0x002227d8eea31acfb0dec067b11e24c3174d033e90e9a0d653defd30c76d978a addAsset
Processing 111 of 265 0x298f565f05e7d7000f42812f1c6215e787a8053bb09d11cf5536b78fadaa07ee addAsset
Processing 112 of 265 0xdb68db7745b62368daae35dd01d0789e75220f2a808129d406f99753045f78b8 addAsset
Processing 113 of 265 0xd2b05c5e20bd6127896d0531405391410e190aab872b9052e703251f6e3bc16f addAsset
Processing 114 of 265 0x80cb32266e7c6b183b19f235bf2fc4b0a30c7c0305d8ef6230919e2010a9a9d8 addAsset
Processing 115 of 265 0x7bc8085bb0a21abbefb42d61191af2b446f4d4f47a1bdf0849f1af6f319f9609 addAsset
Processing 116 of 265 0xb59cf7ac4bd26b6be54cb1c10f07593529561f8407d47fa2ac24d5db663d4924 addAsset
Processing 117 of 265 0x03e7c29351ac4e6193d5c16522d03794cb0b559e47181b8eba843344e0d0b776 addAsset
Processing 118 of 265 0x268ba24cf2b42d269d2fb87610800a5b55ef8c6805f526b1ff42639941d1e449 addAsset
Processing 119 of 265 0xc71389093b09beb81452d342856b3829825fb9ce17588d82589635da65997142 addAsset
Processing 120 of 265 0xf97cc96d6ffda45b28dab1890c84cac7725d46ef47951bcb2e3c5beb871d998b addAsset
Processing 121 of 265 0x0c90fb0b1e6565780d23916c2cda018c1089551701a616d6d5e9fd2940916997 addAsset
Processing 122 of 265 0x7f53729b57ae93711795ba9e873d730684e54cd8f6a191f93e60cd72d667725d addAsset
Processing 123 of 265 0x7583bc55d892bff33573633908799391b695fa43519fced2c634385572efa47e addAsset
Processing 124 of 265 0x9b3d92510e942d01199c05f962ac44fe28f35570e8b13c87dc6b0e7d5d370386 addAsset
Processing 125 of 265 0xb29f12692dafde9cfb4c285163376cf5cad2e3e9f40e32d8dfaec19856b00aa8 addAsset
Processing 126 of 265 0x427158c8cd86c8da4f8a4dcf6ef4bc7468718df25ea3da82e5122726ff324ee8 addAsset
Processing 127 of 265 0x0efbe7a6e83cc653d19ca817e3d859c3ffddb7af62d7643df797e846edc28787 addAsset
Processing 128 of 265 0xf941680a9a5ec8bf296b34f0537e2133a142343579d9ad55ae2fd7498e51fd0c addAsset
Processing 129 of 265 0x3df370980d1df2d72f16e06facb12a5ba22e3fed26bded5e51c821ac8c4d52cf addAsset
Processing 130 of 265 0xffc28d26356379b44186542421c898a296a811155fec85dd38e2e8f07ee087fd addAsset
Processing 131 of 265 0xad5d31859051418c2dfa40635714ebbb5101948f0a8e5b369bc94fd61fc6b418 addAsset
Processing 132 of 265 0xf8f7199e16386108b7c2c4da66b0f2a058deeda3b9f7ec04a9d60a0eb26f3fb3 addAsset
Processing 133 of 265 0x34ea70053dfeffa28cdd37309ccb88da680986be6221dce47a777aadfb9f636a addAsset
Processing 134 of 265 0xd892b20312b0c755a55aaa0967621b4b480d1afebe96ad589e40c3aaf2a65217 addAsset
Processing 135 of 265 0x1390d7a666f9e350e4f9a2b4c3850bdd866416bdcc95c442f901858bbe8f139f addAsset
Processing 136 of 265 0xecb658d97f5a3f158992ca6b105e15600ca34195678eea58541e0f5cd33986ae addAsset
Processing 137 of 265 0xd75a1f724f79cc95b467c28cbe01f69a54fe64dc699eb0e352f6076910e0839e addAsset
Processing 138 of 265 0xf04150e7cf9b4641dfdb74b6b597781213637d517dd41fc0007b3afb49484697 addAsset
Processing 139 of 265 0xf846477fce9a4ae4ee1323d5009ce7b0d2ef1a1287a558e3b1f23199e6ca7b68 addAsset
Processing 140 of 265 0x017336fbbe95ff754200d48eee4494cf4f4bf58fe097adf60593d873c6585f4f addAsset
Processing 141 of 265 0x8db8b445a058fef9ad326289cfc15eaa995007dfdb113009ed296f7417cee1ae addAsset
Processing 142 of 265 0x24f2f5b466d026b6f6c1b95e0f4fb3b47edf23e36ab9a4d1462c41b71aa8bcd8 addAsset
Processing 143 of 265 0x3a5786b627100d50a2ce9211258d61fe1abf7b463659df027f34d260bb93430c addAsset
Processing 144 of 265 0x65d7bcc12d998b483d1776b4999e7999c0c809a5a03bb127127f3fa4a9272fbf addAsset
Processing 145 of 265 0x05118917c5989b740ee7fab38e1cf15bdcd913744129caf5367f638445100acc addAsset
Processing 146 of 265 0x36de69215afbce498a3db8f8b3bfdf124347cfa9c21a6c1119a0b1df629db463 addAsset
Processing 147 of 265 0x0fb7e5ed27da97a6912a4679c47920394b0b6d94b04f33597c716542732202f3 addAsset
Processing 148 of 265 0x69102af09ea76a0c190fd4702dbc542c07ce15e7ffb377114fdade1b566798d9 addAsset
Processing 149 of 265 0xfdb75904200a5d515aad314cb0c45b64054f7e97c02c92bc0517bd0441fa3eb4 addAsset
Processing 150 of 265 0x20f7acb3243267d23330f59bd2b0b0858e69f37d1447fbec3800685dd2b4acf5 addAsset
Processing 151 of 265 0x9364d288e8f4bead9ce17501fab1631ac430d020093beb904709c6729074459d addAsset
Processing 152 of 265 0xa6a000f84be983deca62e5a8c8c92f8f0f312f542fff17096f4aede3f7840990 addAsset
Processing 153 of 265 0x1e02977bc4fe8315a9f79231859deecf48d150f27151113679a95d17b97819fe addAsset
Processing 154 of 265 0xa09d1281833f03dd88d7314aeddc2853731d14939a7186288423f0740fe9ca04 addAsset
Processing 155 of 265 0x04dc9f09f9e6d1a25e4bf084fd0d101041c55c8c818071edf89a444f12357075 addAsset
Processing 156 of 265 0x8dea0b489642986329c2d2240bf834d5dc3239777fb3a55acd3aaf37dc452c00 addAsset
Processing 157 of 265 0x875dd9c766431152e2c61064f4fddae501059e5f0f698db16896535df73f9b08 addAsset
Processing 158 of 265 0xb98369c31a73020f4d1511a97c56b8bbfe11bd859bf0e918d9545035a3cd99f6 addAsset
Processing 159 of 265 0x6248232e3ec5ea514a4166660f53b20b9866896f931deefa38763ee8d1940391 addAsset
Processing 160 of 265 0x89494c970ed23d4542d56dbb7d656a48710b775a0c9c6292f12ede76e1603c36 addAsset
Processing 161 of 265 0x319485820d8734b3af458acf798e1f23a54ad464fab63b1c8f09c880015a81ac addAsset
Processing 162 of 265 0x5264291372b80560ed3325ada0d63b2d032b601e78afd2e76e8f8fde2bf93d07 addAsset
Processing 163 of 265 0x78f19b61ab1b4bf0358591d81547aba511b2c78d34cb03e4086cc013a0522681 addAsset
Processing 164 of 265 0x18206900876bc517c422fe7fe42908d265e82f46028e92430ba7966cbac0b2df addPunks
Processing 165 of 265 0x35c0a549f4f5a9f7ac5bdadeb0d1349d2c69081606b5b16df8eb176f2a5f37be addPunks
Processing 166 of 265 0x238db52e16c12bdd1f62d79b25982b0f21f84653662fd5818bf268aedc484b73 addPunks
Processing 167 of 265 0xd7a9cafeb41257d1a971b19fc8360de677acff08133aa4294562e92c439e1dc9 addPunks
Processing 168 of 265 0x966796c32fc46c177133bc413480a822cc3a4612190d19105b2214df5dba8ea4 addPunks
Processing 169 of 265 0xb8001ba8dffca28840cb34a7858ac02044ba2ae0651a00f0100d9674a74271f6 addPunks
Processing 170 of 265 0xbc87ba57bcfa510840645258afe1b7df7ed89c1310b90a1d13bbea38a032bdcb addPunks
Processing 171 of 265 0xc608bf87bf12808f5f2104f9ec19e330bafe9ccd97bd0c6ea1b6693a2c49d3c7 addPunks
Processing 172 of 265 0xc323f499cf4290770971b84c3c72c3362925f204e804370867c1390accdf0390 addPunks
Processing 173 of 265 0x88ea3fe2b71afd27252d50f7c7884ec2e9471ba2c10f286d6ec9145ecb7b84ca addPunks
Processing 174 of 265 0x58ff977a1de1dea6194eab0fe38587c4e10cbd998310279db916875d9799fa0b addPunks
Processing 175 of 265 0x06572a1fedcfbe8604bd94c740b85ac1b7302da5c7201756729912352672388c addPunks
Processing 176 of 265 0xff12d1554dd2429acfb7d3c8cad049666fe648c803909e988cc4d7cbd0295e2e addPunks
Processing 177 of 265 0x5a3108619ab480c3eca1cf664fa245e2923772123682c7e93bd4691d5f7fdc74 addPunks
Processing 178 of 265 0x3d987f772ae1fccca995f00feab1b36b99d94ac4eb490e9c619d481d29a59445 addPunks
Processing 179 of 265 0x640d50226d445ae0d4f0607d928994e48b330f6bae11170d7233528d7c60071e addPunks
Processing 180 of 265 0x5aab8a6cc947a27d6bb90d1ffe3d3b2610825cac2dd4b5275efaa2168db4a13f addPunks
Processing 181 of 265 0xf19abd591626dd9f14d937ad3999b0edebdb24a006f82053332b5ae2292f2b3b addPunks
Processing 182 of 265 0xe96ec1fa1ef6a89e08bf7bb437e2cbeea845873b0f1a19a828d4a0587fb16ceb addPunks
Processing 183 of 265 0x870cfe54c9930cb7ee7f6a39305e45df4dc9e2097474755259aca03d6e5ac578 addPunks
Processing 184 of 265 0xe96afb9a34fdc57ad666bfed26ff5a37c7bf8e561a63a9c9a007a3fbecfb4847 addPunks
Processing 185 of 265 0x39e49e45d0c952e0d6f973cb4edcc0d8fa50e5933674b4c66e29e871d07a0c1f addPunks
Processing 186 of 265 0x1b807b3218d78198df35f84ea920d5eb2d7bf4bd613856ac83aeec7f16287621 addPunks
Processing 187 of 265 0xa3d5bfaf46094c108f7782c70af690371a7e19e3998fbde95ae0272407beecb4 addPunks
Processing 188 of 265 0xb70a3ca3591cda0fdad538afd340453a11811061e754d32495f0a004aeb804ed addPunks
Processing 189 of 265 0xb001784c0b1ad831756cb4ba4f09116aa4daade032fe87fcecd1e6e26e6ced32 addPunks
Processing 190 of 265 0xa66f1fb0bd84806cafd8cb99fd36833fd5df0e1b79751e6e0448f0a15f9699e4 addPunks
Processing 191 of 265 0xba7ee36a9028f4614961038e388ba00235e4d696114f3ed43db44422e3d6d2bf addPunks
Processing 192 of 265 0x0d4717d5c95587fa92067122a2d097f8e624723dc5b68fee2e6c3479a302b946 addPunks
Processing 193 of 265 0xa19c832490eaa1bfec4017df092fb8c82d860bc6e5ae4cc6e805ffd7af31a9b7 addPunks
Processing 194 of 265 0x6a755f324ad276da016feb6264da91fd48b854424dd022f03e4ccfcad62d986a addPunks
Processing 195 of 265 0xa86f3519bf6b8000ad21cead08ab6bab3b79f3c1452034e82c8370b686dcfc72 addPunks
Processing 196 of 265 0x5cbcb494b7100037b68045ed417ac0064a4edb19b41bd72337c1de52e519f41a addPunks
Processing 197 of 265 0x4563cbd90a75d4a09cdc36b2b010f98c86ef525ef2a8ac8446976a43bb001de7 addPunks
Processing 198 of 265 0xcc0348fe4acddb0bb7d4f93693f47e80e44f4d63a39716f24874aaf2ce0eff85 addPunks
Processing 199 of 265 0xe380f7eaf0e7064321e8340035186084f971aae15235c1d039fd702cbcf91cae addPunks
Processing 200 of 265 0x04c8f55cb51398285b0e10b7a41443cfbc971fe81e50d58db4b53f2c05d5416c addPunks
Processing 201 of 265 0xd40f568e732375f1a082432323aebf491ebd09c8ec503b9c8628f82bb9716ee3 addPunks
Processing 202 of 265 0x4c40b5aef589aafa4eef0f717bb4ca1427791e9ae76bd1bf81c79a830fde8b1f addPunks
Processing 203 of 265 0x370bd4de2b0024cf546919ad897c3c1f6fa6109bdf09b498716765557290a1ee addPunks
Processing 204 of 265 0x1e070989fabeed67c5ca960b4f2d4955ac3e1ece2c94562689dbfe273fd60c4f addPunks
Processing 205 of 265 0xfa1b78fbfe5ba802ff355165e134ed363e17d946a93f8debdbb8052c89a1b648 addPunks
Processing 206 of 265 0xf267ba43d02bce4d9660aa4c72416665e48f24f8bd830d57f8958cc0dc159282 addPunks
Processing 207 of 265 0xbf1c84c81979cc290326b7f694d2dccfaf5f520277c0bc260409fe13a4fa2dfa addPunks
Processing 208 of 265 0x028b1fd3cad5d26bd4452b4f7e66cc46383a7d4d65baa97b9dc8d76ded44b4d6 addPunks
Processing 209 of 265 0x8d2f8c0d91c5f80fef3ab3e3cff6c8b703dc572b00addb6afd2b844ea1f2aa62 addPunks
Processing 210 of 265 0x969cd51a2f974aee816ba12abb40c11c4da068297bfb7f16920153c148aeaf5f addPunks
Processing 211 of 265 0xa9d12e5f16373434e7786218eecc111820d162b931bf608911304d4f1ef47bb8 addPunks
Processing 212 of 265 0x81b4cda831741de62c2a0bb89a124023a5d7e1ad2699e8436ecfdca66447429d addPunks
Processing 213 of 265 0x81de1e7620c862ce3b77b3dfa1836a5b8485a9034af31d00a3cd6c6cdfdd598d addPunks
Processing 214 of 265 0xab44a36f522a2098b6398437214107804fd3283d319ea698a0217f11b0fefbac addPunks
Processing 215 of 265 0x4183308394a4da3fcc4110897a44a8e21aff1a7ae4e2f21d198a25ef67a2ef81 addPunks
Processing 216 of 265 0x42b6422ec8bbe9dc11e66924c13dfc5cf6092a934f218e41805a6700948bc87f addPunks
Processing 217 of 265 0xb43c5a4c20581448acd6f94098fa2755d8a6dda8dda55e101d4aafee08b71b8d addPunks
Processing 218 of 265 0xeda0ef8740365008d0918808b34e848439412de8dcecbc807ad79185e415507d addPunks
Processing 219 of 265 0xcb4c39c5ad66857edbea54be5307b5e979659bc37fc65dc5cc0724f8df79ad6b addPunks
Processing 220 of 265 0x71a9a70726db6344183d66320a7e3edc188b6193ea240572388a584b229e05e0 addPunks
Processing 221 of 265 0x45713495a28f6e5a0c6f22da6298a665bf9d4e1bafdcb10134c3af57eb48e2cb addPunks
Processing 222 of 265 0xa45e24ab0b35ded7771b9d7b99fba6874f0178acfed6aee2635592be34e361e9 addPunks
Processing 223 of 265 0x761957d06800132296c1200c77e04d618b614024074128af9781983393fbd18e addPunks
Processing 224 of 265 0x0ec438e247a67ecb6811e9bdd78e51ddd868a9cfe68c11a135392ea2691b6171 addPunks
Processing 225 of 265 0x504c272b388a5dc7cda5f52390bd7a3a0204dfe39f166b9eb3bbeedd827bbe70 addPunks
Processing 226 of 265 0x92732f0099d8832214d70633da356a6ac7014502e412366f2b5c80c1dc7f1aa7 addPunks
Processing 227 of 265 0x7a73fa67a8f3b651302a3f2b27d71af2d5f5852a574813c7f8b99c7d451e31ae addPunks
Processing 228 of 265 0x360d3efcc5ce47b89c6960e253eedab3bd24a978a2a2e4901cea7946e8271c15 addPunks
Processing 229 of 265 0x3d09dd670d69b48a5689f617185e69467ff04d15b9fef349a5a642bb38d76ac0 addPunks
Processing 230 of 265 0x64209efe86f7ba5612fad3008d2e152bfd1fd96a5b265890ee631dcacd54a03e addPunks
Processing 231 of 265 0xad078931605c03c76b5a5ab86527e47a074dd66e7d6bfbb6bc606dd8311f9cd2 addPunks
Processing 232 of 265 0xaefc10f30a3c44a86e285f086685d1c7ac8ae71c5470b40767fd514daae429ba addPunks
Processing 233 of 265 0xfd8e636c97e1aedfab3c536a2443293b59111f0ebaa4f8f8f2498e01a394f6e5 addPunks
Processing 234 of 265 0x5957bca1267521a75302cf061bca385f362328b3e06852c7639568319904cab1 addPunks
Processing 235 of 265 0xcb1303852b5c83092908ae20f3a80927fd46a60a963c2ac22f59791827bc6d4a addPunks
Processing 236 of 265 0x2dd1f3008ddaee628f849a6da7c4f5e6d048212dff563a96afd2b36ccd6918eb addPunks
Processing 237 of 265 0xe70462089d2fde8cd45d809bf121d1acb25bea2c2f7b21b020336f8bac84fb4d addPunks
Processing 238 of 265 0x0855af699837c1c6d527e8b914ecaa03d926fa2139e0ea4649ef92eb3cb4cca4 addPunks
Processing 239 of 265 0x58bc27de84fa94debd90d508af4d6d46165774c20247129a638a44400ae18f47 addPunks
Processing 240 of 265 0xe73636425536689f8bace17fe7d3ba858ceab241e3f4cf10834867f1fc9cf7d9 addPunks
Processing 241 of 265 0x248994d6bc4a0eb7717f193bfb3578fe1900b22bb8b5273346c2e364512f6a2e addPunks
Processing 242 of 265 0xe62e90e8abd295de06ac4b8cbfdab9ff0189a5da582dd27bc46bbaf8efbc2566 addPunks
Processing 243 of 265 0x31ce516f0aeef914371475c78f3f4598bac76bf062373c6dd4810cb913649116 addPunks
Processing 244 of 265 0x61f0bf36095c4f4000a2bc3aa1c8f9e7aebf6bde9b8cf16bf9ab387466ef6a4c addPunks
Processing 245 of 265 0x74bcba2fceab2cca65d79bdb06ccb68d0101a7a766f55779fa98c2371c7c3d71 addPunks
Processing 246 of 265 0x2ebd5ba37248e25af157a95047c7f49ecb48a9dae400484678d5f156705a36cc addPunks
Processing 247 of 265 0xb724927f569e04f28e5859114efab2dc6486c2a8e3d90455f892d3a6d7a941ca addPunks
Processing 248 of 265 0xee32c0aabc1193b309c27df3bf381fc3bb49f6f2864d3c1aa5d4ce980cf329f7 addPunks
Processing 249 of 265 0x6b8a97cf5316935f9d8c3aef8e49b1a6a8ce12e2253bb214f7357b08ba149e92 addPunks
Processing 250 of 265 0xce584548eec7398ff198422663eb652aa0e4da8769a2b0ba1686f9a8128fa843 addPunks
Processing 251 of 265 0x9afc188d76f2fbb27e1d42c83e7a2a0bb95068b4887862a90c3c3baa541d7965 addPunks
Processing 252 of 265 0x30866779e975fdf8182b5c8e8b720b66a7f26075aaad36dbbe144ad932355670 addPunks
Processing 253 of 265 0x6cc0dbf6d1dc14d3adb4fc89616f2efeb3b7b82879467236c56cabaf352bef1c addPunks
Processing 254 of 265 0xa085d36a2e6322c4e3fa3e14706962e9952406112ced8bc5a46102bfe5efbacd addPunks
Processing 255 of 265 0x3a7118b1e784cdb59c4ff80db402bab015138952cfa574e906886111bcb2eaf5 addPunks
Processing 256 of 265 0xa7fb33e3bb76876a07daec8be006624f9885298bf523398c27cdeaee22d2b8e4 addPunks
Processing 257 of 265 0x8d7cff365e8a738be36cc5e0f68c6a014312ecf3b89dc1b3b074432237ea8f32 addPunks
Processing 258 of 265 0xb0ed9a1e573dd738ccb62f3326b6760740f9565cfa8e03202ed1fcd4adf3274c addPunks
Processing 259 of 265 0x31a31b73805009ec136956db7bbb79e8aabf8862d275b578054cb48b80067435 addPunks
Processing 260 of 265 0x09e7d348cd5c0f7fee404924fbc7b6ca11508477ae79489cf206e0b63c6527be addPunks
Processing 261 of 265 0x401d9d0673bdac7bdfcd32ce89e3958cfa3001251363ce6130aa5e9ae3e633b1 addPunks
Processing 262 of 265 0x3c52b02973b1fb93611e0832b7d2097d62723379e102d05d76aebd05ab247db9 addPunks
Processing 263 of 265 0xac90c8398d793a241a2f3d7e739bfc637601e78e8e03bd1a624b4828c763fafc addPunks
Processing 264 of 265 0x35f8528199af4b86ddd071138bb6b7c056ce7b1a11a4bbdfb6e057f12d47104f sealContract
```

The transaction setup data for the images can be found in [scripts/setupData.json](scripts/setupData.json). A copy of this file has been made in the [test](test) folder to set up the same data in a dev environment.

<br />

<hr />

### Generating Metadata and Image In This Dev Environment

```
$ npx hardhat test


  ExploringCryptoPunksOnChain

      beforeEach
        > Deployed CryptopunksData - gasUsed: 1493328 ~ ETH 0.01493328 ~ USD 22
      beforeEach - end

      00. Test 00 - Generate Metadata & Image
        > cryptopunksData setup - gasUsed: 386564 ~ ETH 0.00386564 ~ USD 5
        > cryptopunksData setup - gasUsed: 114110 ~ ETH 0.0011411 ~ USD 1
        > cryptopunksData setup - gasUsed: 114170 ~ ETH 0.0011417 ~ USD 1
        > cryptopunksData setup - gasUsed: 114110 ~ ETH 0.0011411 ~ USD 1
        > cryptopunksData setup - gasUsed: 114146 ~ ETH 0.00114146 ~ USD 1
        > cryptopunksData setup - gasUsed: 114182 ~ ETH 0.00114182 ~ USD 1
        > cryptopunksData setup - gasUsed: 114146 ~ ETH 0.00114146 ~ USD 1
        > cryptopunksData setup - gasUsed: 114050 ~ ETH 0.0011405 ~ USD 1
        > cryptopunksData setup - gasUsed: 114098 ~ ETH 0.00114098 ~ USD 1
        > cryptopunksData setup - gasUsed: 114122 ~ ETH 0.00114122 ~ USD 1
        > cryptopunksData setup - gasUsed: 114146 ~ ETH 0.00114146 ~ USD 1
        > cryptopunksData setup - gasUsed: 114134 ~ ETH 0.00114134 ~ USD 1
        > cryptopunksData setup - gasUsed: 114098 ~ ETH 0.00114098 ~ USD 1
        > cryptopunksData setup - gasUsed: 114038 ~ ETH 0.00114038 ~ USD 1
        > cryptopunksData setup - gasUsed: 114086 ~ ETH 0.00114086 ~ USD 1
        > cryptopunksData setup - gasUsed: 114134 ~ ETH 0.00114134 ~ USD 1
        > cryptopunksData setup - gasUsed: 114110 ~ ETH 0.0011411 ~ USD 1
        > cryptopunksData setup - gasUsed: 114146 ~ ETH 0.00114146 ~ USD 1
        > cryptopunksData setup - gasUsed: 114110 ~ ETH 0.0011411 ~ USD 1
        > cryptopunksData setup - gasUsed: 114146 ~ ETH 0.00114146 ~ USD 1
        > cryptopunksData setup - gasUsed: 114110 ~ ETH 0.0011411 ~ USD 1
        > cryptopunksData setup - gasUsed: 114074 ~ ETH 0.00114074 ~ USD 1
        > cryptopunksData setup - gasUsed: 114074 ~ ETH 0.00114074 ~ USD 1
        > cryptopunksData setup - gasUsed: 114074 ~ ETH 0.00114074 ~ USD 1
        > cryptopunksData setup - gasUsed: 114110 ~ ETH 0.0011411 ~ USD 1
        > cryptopunksData setup - gasUsed: 114122 ~ ETH 0.00114122 ~ USD 1
        > cryptopunksData setup - gasUsed: 114074 ~ ETH 0.00114074 ~ USD 1
        > cryptopunksData setup - gasUsed: 114146 ~ ETH 0.00114146 ~ USD 1
        > cryptopunksData setup - gasUsed: 114098 ~ ETH 0.00114098 ~ USD 1
        > cryptopunksData setup - gasUsed: 114050 ~ ETH 0.0011405 ~ USD 1
        > cryptopunksData setup - gasUsed: 94126 ~ ETH 0.00094126 ~ USD 1
        > cryptopunksData setup - gasUsed: 206171 ~ ETH 0.00206171 ~ USD 3
        > cryptopunksData setup - gasUsed: 206171 ~ ETH 0.00206171 ~ USD 3
        > cryptopunksData setup - gasUsed: 206171 ~ ETH 0.00206171 ~ USD 3
        > cryptopunksData setup - gasUsed: 206171 ~ ETH 0.00206171 ~ USD 3
        > cryptopunksData setup - gasUsed: 205835 ~ ETH 0.00205835 ~ USD 3
        > cryptopunksData setup - gasUsed: 205835 ~ ETH 0.00205835 ~ USD 3
        > cryptopunksData setup - gasUsed: 205835 ~ ETH 0.00205835 ~ USD 3
        > cryptopunksData setup - gasUsed: 205835 ~ ETH 0.00205835 ~ USD 3
        > cryptopunksData setup - gasUsed: 228583 ~ ETH 0.00228583 ~ USD 3
        > cryptopunksData setup - gasUsed: 206171 ~ ETH 0.00206171 ~ USD 3
        > cryptopunksData setup - gasUsed: 228571 ~ ETH 0.00228571 ~ USD 3
        > cryptopunksData setup - gasUsed: 70577 ~ ETH 0.00070577 ~ USD 1
        > cryptopunksData setup - gasUsed: 115479 ~ ETH 0.00115479 ~ USD 1
        > cryptopunksData setup - gasUsed: 138155 ~ ETH 0.00138155 ~ USD 2
        > cryptopunksData setup - gasUsed: 70589 ~ ETH 0.00070589 ~ USD 1
        > cryptopunksData setup - gasUsed: 138311 ~ ETH 0.00138311 ~ USD 2
        > cryptopunksData setup - gasUsed: 70469 ~ ETH 0.00070469 ~ USD 1
        > cryptopunksData setup - gasUsed: 70421 ~ ETH 0.00070421 ~ USD 1
        > cryptopunksData setup - gasUsed: 115251 ~ ETH 0.00115251 ~ USD 1
        > cryptopunksData setup - gasUsed: 115251 ~ ETH 0.00115251 ~ USD 1
        > cryptopunksData setup - gasUsed: 115203 ~ ETH 0.00115203 ~ USD 1
        > cryptopunksData setup - gasUsed: 115503 ~ ETH 0.00115503 ~ USD 1
        > cryptopunksData setup - gasUsed: 115527 ~ ETH 0.00115527 ~ USD 1
        > cryptopunksData setup - gasUsed: 70349 ~ ETH 0.00070349 ~ USD 1
        > cryptopunksData setup - gasUsed: 115587 ~ ETH 0.00115587 ~ USD 1
        > cryptopunksData setup - gasUsed: 70445 ~ ETH 0.00070445 ~ USD 1
        > cryptopunksData setup - gasUsed: 70349 ~ ETH 0.00070349 ~ USD 1
        > cryptopunksData setup - gasUsed: 138323 ~ ETH 0.00138323 ~ USD 2
        > cryptopunksData setup - gasUsed: 70625 ~ ETH 0.00070625 ~ USD 1
        > cryptopunksData setup - gasUsed: 70757 ~ ETH 0.00070757 ~ USD 1
        > cryptopunksData setup - gasUsed: 115275 ~ ETH 0.00115275 ~ USD 1
        > cryptopunksData setup - gasUsed: 70601 ~ ETH 0.00070601 ~ USD 1
        > cryptopunksData setup - gasUsed: 70481 ~ ETH 0.00070481 ~ USD 1
        > cryptopunksData setup - gasUsed: 70349 ~ ETH 0.00070349 ~ USD 1
        > cryptopunksData setup - gasUsed: 137867 ~ ETH 0.00137867 ~ USD 2
        > cryptopunksData setup - gasUsed: 70601 ~ ETH 0.00070601 ~ USD 1
        > cryptopunksData setup - gasUsed: 138119 ~ ETH 0.00138119 ~ USD 2
        > cryptopunksData setup - gasUsed: 115563 ~ ETH 0.00115563 ~ USD 1
        > cryptopunksData setup - gasUsed: 70781 ~ ETH 0.00070781 ~ USD 1
        > cryptopunksData setup - gasUsed: 115371 ~ ETH 0.00115371 ~ USD 1
        > cryptopunksData setup - gasUsed: 115599 ~ ETH 0.00115599 ~ USD 1
        > cryptopunksData setup - gasUsed: 115455 ~ ETH 0.00115455 ~ USD 1
        > cryptopunksData setup - gasUsed: 137915 ~ ETH 0.00137915 ~ USD 2
        > cryptopunksData setup - gasUsed: 70541 ~ ETH 0.00070541 ~ USD 1
        > cryptopunksData setup - gasUsed: 160495 ~ ETH 0.00160495 ~ USD 2
        > cryptopunksData setup - gasUsed: 137999 ~ ETH 0.00137999 ~ USD 2
        > cryptopunksData setup - gasUsed: 138095 ~ ETH 0.00138095 ~ USD 2
        > cryptopunksData setup - gasUsed: 70601 ~ ETH 0.00070601 ~ USD 1
        > cryptopunksData setup - gasUsed: 137939 ~ ETH 0.00137939 ~ USD 2
        > cryptopunksData setup - gasUsed: 138311 ~ ETH 0.00138311 ~ USD 2
        > cryptopunksData setup - gasUsed: 138143 ~ ETH 0.00138143 ~ USD 2
        > cryptopunksData setup - gasUsed: 70457 ~ ETH 0.00070457 ~ USD 1
        > cryptopunksData setup - gasUsed: 115275 ~ ETH 0.00115275 ~ USD 1
        > cryptopunksData setup - gasUsed: 70733 ~ ETH 0.00070733 ~ USD 1
        > cryptopunksData setup - gasUsed: 70613 ~ ETH 0.00070613 ~ USD 1
        > cryptopunksData setup - gasUsed: 138035 ~ ETH 0.00138035 ~ USD 2
        > cryptopunksData setup - gasUsed: 70649 ~ ETH 0.00070649 ~ USD 1
        > cryptopunksData setup - gasUsed: 115299 ~ ETH 0.00115299 ~ USD 1
        > cryptopunksData setup - gasUsed: 115287 ~ ETH 0.00115287 ~ USD 1
        > cryptopunksData setup - gasUsed: 137927 ~ ETH 0.00137927 ~ USD 2
        > cryptopunksData setup - gasUsed: 70385 ~ ETH 0.00070385 ~ USD 1
        > cryptopunksData setup - gasUsed: 70817 ~ ETH 0.00070817 ~ USD 1
        > cryptopunksData setup - gasUsed: 70721 ~ ETH 0.00070721 ~ USD 1
        > cryptopunksData setup - gasUsed: 115479 ~ ETH 0.00115479 ~ USD 1
        > cryptopunksData setup - gasUsed: 115395 ~ ETH 0.00115395 ~ USD 1
        > cryptopunksData setup - gasUsed: 70793 ~ ETH 0.00070793 ~ USD 1
        > cryptopunksData setup - gasUsed: 205955 ~ ETH 0.00205955 ~ USD 3
        > cryptopunksData setup - gasUsed: 70493 ~ ETH 0.00070493 ~ USD 1
        > cryptopunksData setup - gasUsed: 70613 ~ ETH 0.00070613 ~ USD 1
        > cryptopunksData setup - gasUsed: 70577 ~ ETH 0.00070577 ~ USD 1
        > cryptopunksData setup - gasUsed: 115179 ~ ETH 0.00115179 ~ USD 1
        > cryptopunksData setup - gasUsed: 115575 ~ ETH 0.00115575 ~ USD 1
        > cryptopunksData setup - gasUsed: 70769 ~ ETH 0.00070769 ~ USD 1
        > cryptopunksData setup - gasUsed: 70649 ~ ETH 0.00070649 ~ USD 1
        > cryptopunksData setup - gasUsed: 138323 ~ ETH 0.00138323 ~ USD 2
        > cryptopunksData setup - gasUsed: 183423 ~ ETH 0.00183423 ~ USD 2
        > cryptopunksData setup - gasUsed: 70481 ~ ETH 0.00070481 ~ USD 1
        > cryptopunksData setup - gasUsed: 70553 ~ ETH 0.00070553 ~ USD 1
        > cryptopunksData setup - gasUsed: 160459 ~ ETH 0.00160459 ~ USD 2
        > cryptopunksData setup - gasUsed: 70409 ~ ETH 0.00070409 ~ USD 1
        > cryptopunksData setup - gasUsed: 160831 ~ ETH 0.00160831 ~ USD 2
        > cryptopunksData setup - gasUsed: 115203 ~ ETH 0.00115203 ~ USD 1
        > cryptopunksData setup - gasUsed: 183627 ~ ETH 0.00183627 ~ USD 2
        > cryptopunksData setup - gasUsed: 115575 ~ ETH 0.00115575 ~ USD 1
        > cryptopunksData setup - gasUsed: 70349 ~ ETH 0.00070349 ~ USD 1
        > cryptopunksData setup - gasUsed: 160963 ~ ETH 0.00160963 ~ USD 2
        > cryptopunksData setup - gasUsed: 70577 ~ ETH 0.00070577 ~ USD 1
        > cryptopunksData setup - gasUsed: 160471 ~ ETH 0.00160471 ~ USD 2
        > cryptopunksData setup - gasUsed: 115287 ~ ETH 0.00115287 ~ USD 1
        > cryptopunksData setup - gasUsed: 70577 ~ ETH 0.00070577 ~ USD 1
        > cryptopunksData setup - gasUsed: 138251 ~ ETH 0.00138251 ~ USD 2
        > cryptopunksData setup - gasUsed: 70529 ~ ETH 0.00070529 ~ USD 1
        > cryptopunksData setup - gasUsed: 115395 ~ ETH 0.00115395 ~ USD 1
        > cryptopunksData setup - gasUsed: 70769 ~ ETH 0.00070769 ~ USD 1
        > cryptopunksData setup - gasUsed: 115479 ~ ETH 0.00115479 ~ USD 1
        > cryptopunksData setup - gasUsed: 205403 ~ ETH 0.00205403 ~ USD 3
        > cryptopunksData setup - gasUsed: 70577 ~ ETH 0.00070577 ~ USD 1
        > cryptopunksData setup - gasUsed: 70601 ~ ETH 0.00070601 ~ USD 1
        > cryptopunksData setup - gasUsed: 160351 ~ ETH 0.00160351 ~ USD 2
        > cryptopunksData setup - gasUsed: 70589 ~ ETH 0.00070589 ~ USD 1
        > cryptopunksData setup - gasUsed: 138011 ~ ETH 0.00138011 ~ USD 2
        > cryptopunksData setup - gasUsed: 115419 ~ ETH 0.00115419 ~ USD 1
        > cryptopunksData setup - gasUsed: 115323 ~ ETH 0.00115323 ~ USD 1
        > cryptopunksData setup - gasUsed: 160975 ~ ETH 0.00160975 ~ USD 2
        > cryptopunksData setup - gasUsed: 115491 ~ ETH 0.00115491 ~ USD 1
        > cryptopunksData setup - gasUsed: 115563 ~ ETH 0.00115563 ~ USD 1
        > cryptopunksData setup - gasUsed: 138275 ~ ETH 0.00138275 ~ USD 2
        > cryptopunksData setup - gasUsed: 70517 ~ ETH 0.00070517 ~ USD 1
        > cryptopunksData setup - gasUsed: 70457 ~ ETH 0.00070457 ~ USD 1
        > cryptopunksData setup - gasUsed: 160459 ~ ETH 0.00160459 ~ USD 2
        > cryptopunksData setup - gasUsed: 137963 ~ ETH 0.00137963 ~ USD 2
        > cryptopunksData setup - gasUsed: 160879 ~ ETH 0.00160879 ~ USD 2
        > cryptopunksData setup - gasUsed: 115587 ~ ETH 0.00115587 ~ USD 1
        > cryptopunksData setup - gasUsed: 70781 ~ ETH 0.00070781 ~ USD 1
        > cryptopunksData setup - gasUsed: 115251 ~ ETH 0.00115251 ~ USD 1
        > cryptopunksData setup - gasUsed: 138119 ~ ETH 0.00138119 ~ USD 2
        > cryptopunksData setup - gasUsed: 70601 ~ ETH 0.00070601 ~ USD 1
        > cryptopunksData setup - gasUsed: 70457 ~ ETH 0.00070457 ~ USD 1
        > cryptopunksData setup - gasUsed: 137915 ~ ETH 0.00137915 ~ USD 2
        > cryptopunksData setup - gasUsed: 70601 ~ ETH 0.00070601 ~ USD 1
        > cryptopunksData setup - gasUsed: 160771 ~ ETH 0.00160771 ~ USD 2
        > cryptopunksData setup - gasUsed: 160795 ~ ETH 0.00160795 ~ USD 2
        > cryptopunksData setup - gasUsed: 70637 ~ ETH 0.00070637 ~ USD 1
        > cryptopunksData setup - gasUsed: 137867 ~ ETH 0.00137867 ~ USD 2
        > cryptopunksData setup - gasUsed: 70409 ~ ETH 0.00070409 ~ USD 1
        > cryptopunksData setup - gasUsed: 70565 ~ ETH 0.00070565 ~ USD 1
        > cryptopunksData setup - gasUsed: 160831 ~ ETH 0.00160831 ~ USD 2
        > cryptopunksData setup - gasUsed: 70505 ~ ETH 0.00070505 ~ USD 1
        > cryptopunksData setup - gasUsed: 137855 ~ ETH 0.00137855 ~ USD 2
        > cryptopunksData setup - gasUsed: 70613 ~ ETH 0.00070613 ~ USD 1
        > cryptopunksData setup - gasUsed: 70481 ~ ETH 0.00070481 ~ USD 1
        > cryptopunksData setup - gasUsed: 115467 ~ ETH 0.00115467 ~ USD 1
        > cryptopunksData setup - gasUsed: 70481 ~ ETH 0.00070481 ~ USD 1
        > cryptopunksData setup - gasUsed: 608330 ~ ETH 0.0060833 ~ USD 9
        > cryptopunksData setup - gasUsed: 608366 ~ ETH 0.00608366 ~ USD 9
        > cryptopunksData setup - gasUsed: 608282 ~ ETH 0.00608282 ~ USD 9
        > cryptopunksData setup - gasUsed: 608354 ~ ETH 0.00608354 ~ USD 9
        > cryptopunksData setup - gasUsed: 608474 ~ ETH 0.00608474 ~ USD 9
        > cryptopunksData setup - gasUsed: 608330 ~ ETH 0.0060833 ~ USD 9
        > cryptopunksData setup - gasUsed: 608702 ~ ETH 0.00608702 ~ USD 9
        > cryptopunksData setup - gasUsed: 608642 ~ ETH 0.00608642 ~ USD 9
        > cryptopunksData setup - gasUsed: 608558 ~ ETH 0.00608558 ~ USD 9
        > cryptopunksData setup - gasUsed: 608702 ~ ETH 0.00608702 ~ USD 9
        > cryptopunksData setup - gasUsed: 608498 ~ ETH 0.00608498 ~ USD 9
        > cryptopunksData setup - gasUsed: 608714 ~ ETH 0.00608714 ~ USD 9
        > cryptopunksData setup - gasUsed: 608750 ~ ETH 0.0060875 ~ USD 9
        > cryptopunksData setup - gasUsed: 608762 ~ ETH 0.00608762 ~ USD 9
        > cryptopunksData setup - gasUsed: 608834 ~ ETH 0.00608834 ~ USD 9
        > cryptopunksData setup - gasUsed: 608618 ~ ETH 0.00608618 ~ USD 9
        > cryptopunksData setup - gasUsed: 608822 ~ ETH 0.00608822 ~ USD 9
        > cryptopunksData setup - gasUsed: 608666 ~ ETH 0.00608666 ~ USD 9
        > cryptopunksData setup - gasUsed: 608762 ~ ETH 0.00608762 ~ USD 9
        > cryptopunksData setup - gasUsed: 608726 ~ ETH 0.00608726 ~ USD 9
        > cryptopunksData setup - gasUsed: 608810 ~ ETH 0.0060881 ~ USD 9
        > cryptopunksData setup - gasUsed: 608942 ~ ETH 0.00608942 ~ USD 9
        > cryptopunksData setup - gasUsed: 608810 ~ ETH 0.0060881 ~ USD 9
        > cryptopunksData setup - gasUsed: 608810 ~ ETH 0.0060881 ~ USD 9
        > cryptopunksData setup - gasUsed: 608846 ~ ETH 0.00608846 ~ USD 9
        > cryptopunksData setup - gasUsed: 608774 ~ ETH 0.00608774 ~ USD 9
        > cryptopunksData setup - gasUsed: 608930 ~ ETH 0.0060893 ~ USD 9
        > cryptopunksData setup - gasUsed: 608978 ~ ETH 0.00608978 ~ USD 9
        > cryptopunksData setup - gasUsed: 608798 ~ ETH 0.00608798 ~ USD 9
        > cryptopunksData setup - gasUsed: 608834 ~ ETH 0.00608834 ~ USD 9
        > cryptopunksData setup - gasUsed: 609002 ~ ETH 0.00609002 ~ USD 9
        > cryptopunksData setup - gasUsed: 608858 ~ ETH 0.00608858 ~ USD 9
        > cryptopunksData setup - gasUsed: 609026 ~ ETH 0.00609026 ~ USD 9
        > cryptopunksData setup - gasUsed: 609002 ~ ETH 0.00609002 ~ USD 9
        > cryptopunksData setup - gasUsed: 608978 ~ ETH 0.00608978 ~ USD 9
        > cryptopunksData setup - gasUsed: 608870 ~ ETH 0.0060887 ~ USD 9
        > cryptopunksData setup - gasUsed: 609050 ~ ETH 0.0060905 ~ USD 9
        > cryptopunksData setup - gasUsed: 609050 ~ ETH 0.0060905 ~ USD 9
        > cryptopunksData setup - gasUsed: 608954 ~ ETH 0.00608954 ~ USD 9
        > cryptopunksData setup - gasUsed: 609074 ~ ETH 0.00609074 ~ USD 9
        > cryptopunksData setup - gasUsed: 609050 ~ ETH 0.0060905 ~ USD 9
        > cryptopunksData setup - gasUsed: 608786 ~ ETH 0.00608786 ~ USD 9
        > cryptopunksData setup - gasUsed: 609110 ~ ETH 0.0060911 ~ USD 9
        > cryptopunksData setup - gasUsed: 609014 ~ ETH 0.00609014 ~ USD 9
        > cryptopunksData setup - gasUsed: 608918 ~ ETH 0.00608918 ~ USD 9
        > cryptopunksData setup - gasUsed: 608906 ~ ETH 0.00608906 ~ USD 9
        > cryptopunksData setup - gasUsed: 609026 ~ ETH 0.00609026 ~ USD 9
        > cryptopunksData setup - gasUsed: 609050 ~ ETH 0.0060905 ~ USD 9
        > cryptopunksData setup - gasUsed: 608930 ~ ETH 0.0060893 ~ USD 9
        > cryptopunksData setup - gasUsed: 609014 ~ ETH 0.00609014 ~ USD 9
        > cryptopunksData setup - gasUsed: 609230 ~ ETH 0.0060923 ~ USD 9
        > cryptopunksData setup - gasUsed: 609110 ~ ETH 0.0060911 ~ USD 9
        > cryptopunksData setup - gasUsed: 609098 ~ ETH 0.00609098 ~ USD 9
        > cryptopunksData setup - gasUsed: 608930 ~ ETH 0.0060893 ~ USD 9
        > cryptopunksData setup - gasUsed: 609062 ~ ETH 0.00609062 ~ USD 9
        > cryptopunksData setup - gasUsed: 609002 ~ ETH 0.00609002 ~ USD 9
        > cryptopunksData setup - gasUsed: 609122 ~ ETH 0.00609122 ~ USD 9
        > cryptopunksData setup - gasUsed: 608942 ~ ETH 0.00608942 ~ USD 9
        > cryptopunksData setup - gasUsed: 608966 ~ ETH 0.00608966 ~ USD 9
        > cryptopunksData setup - gasUsed: 608882 ~ ETH 0.00608882 ~ USD 9
        > cryptopunksData setup - gasUsed: 609158 ~ ETH 0.00609158 ~ USD 9
        > cryptopunksData setup - gasUsed: 609098 ~ ETH 0.00609098 ~ USD 9
        > cryptopunksData setup - gasUsed: 609182 ~ ETH 0.00609182 ~ USD 9
        > cryptopunksData setup - gasUsed: 609182 ~ ETH 0.00609182 ~ USD 9
        > cryptopunksData setup - gasUsed: 608906 ~ ETH 0.00608906 ~ USD 9
        > cryptopunksData setup - gasUsed: 609002 ~ ETH 0.00609002 ~ USD 9
        > cryptopunksData setup - gasUsed: 609074 ~ ETH 0.00609074 ~ USD 9
        > cryptopunksData setup - gasUsed: 608966 ~ ETH 0.00608966 ~ USD 9
        > cryptopunksData setup - gasUsed: 609050 ~ ETH 0.0060905 ~ USD 9
        > cryptopunksData setup - gasUsed: 609098 ~ ETH 0.00609098 ~ USD 9
        > cryptopunksData setup - gasUsed: 609014 ~ ETH 0.00609014 ~ USD 9
        > cryptopunksData setup - gasUsed: 609194 ~ ETH 0.00609194 ~ USD 9
        > cryptopunksData setup - gasUsed: 609266 ~ ETH 0.00609266 ~ USD 9
        > cryptopunksData setup - gasUsed: 609194 ~ ETH 0.00609194 ~ USD 9
        > cryptopunksData setup - gasUsed: 609086 ~ ETH 0.00609086 ~ USD 9
        > cryptopunksData setup - gasUsed: 608990 ~ ETH 0.0060899 ~ USD 9
        > cryptopunksData setup - gasUsed: 609230 ~ ETH 0.0060923 ~ USD 9
        > cryptopunksData setup - gasUsed: 609182 ~ ETH 0.00609182 ~ USD 9
        > cryptopunksData setup - gasUsed: 609110 ~ ETH 0.0060911 ~ USD 9
        > cryptopunksData setup - gasUsed: 609290 ~ ETH 0.0060929 ~ USD 9
        > cryptopunksData setup - gasUsed: 609314 ~ ETH 0.00609314 ~ USD 9
        > cryptopunksData setup - gasUsed: 609182 ~ ETH 0.00609182 ~ USD 9
        > cryptopunksData setup - gasUsed: 609170 ~ ETH 0.0060917 ~ USD 9
        > cryptopunksData setup - gasUsed: 609158 ~ ETH 0.00609158 ~ USD 9
        > cryptopunksData setup - gasUsed: 609170 ~ ETH 0.0060917 ~ USD 9
        > cryptopunksData setup - gasUsed: 608966 ~ ETH 0.00608966 ~ USD 9
        > cryptopunksData setup - gasUsed: 609122 ~ ETH 0.00609122 ~ USD 9
        > cryptopunksData setup - gasUsed: 609254 ~ ETH 0.00609254 ~ USD 9
        > cryptopunksData setup - gasUsed: 609290 ~ ETH 0.0060929 ~ USD 9
        > cryptopunksData setup - gasUsed: 609170 ~ ETH 0.0060917 ~ USD 9
        > cryptopunksData setup - gasUsed: 609398 ~ ETH 0.00609398 ~ USD 9
        > cryptopunksData setup - gasUsed: 609206 ~ ETH 0.00609206 ~ USD 9
        > cryptopunksData setup - gasUsed: 609230 ~ ETH 0.0060923 ~ USD 9
        > cryptopunksData setup - gasUsed: 609278 ~ ETH 0.00609278 ~ USD 9
        > cryptopunksData setup - gasUsed: 609254 ~ ETH 0.00609254 ~ USD 9
        > cryptopunksData setup - gasUsed: 609338 ~ ETH 0.00609338 ~ USD 9
        > cryptopunksData setup - gasUsed: 609182 ~ ETH 0.00609182 ~ USD 9
        > cryptopunksData setup - gasUsed: 609230 ~ ETH 0.0060923 ~ USD 9
        > cryptopunksData setup - gasUsed: 609206 ~ ETH 0.00609206 ~ USD 9
        > cryptopunksData setup - gasUsed: 609230 ~ ETH 0.0060923 ~ USD 9
        > cryptopunksData setup - gasUsed: 26572 ~ ETH 0.00026572 ~ USD 0
3636 "Zombie, Front Beard Dark, Earring, Top Hat"
    ✔ 00. Test 00 (12478ms)

Saved image to test/generatedimage_3636.svg

  1 passing (15s)
```

##### Generated Image

<kbd><img src="test/generatedimage_3636.gif" /></kbd>



<br />

<br />

Enjoy!

(c) BokkyPooBah / Bok Consulting Pty Ltd - Aug 19 2021. The MIT Licence. Not affiliated with [https://www.larvalabs.com/cryptopunks/](LarvaLabs). Some images and data copyright their respective owners. DYOR.
