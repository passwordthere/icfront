import React from 'react';
import LineChartComponent from '../components/charts/LineChartComponent';

export const Work: React.FC = () => {
  const electron = (window as any).electron;

  const chartData_O2 = {
    labels: Array.from({ length: 50 }, (_, i) => `Day ${i + 1}`), // 生成50个日标签
    datasets: [
      {
        label: '入口',
        data: [
          0.209, 0.208, 0.209, 0.209, 0.207, 0.211, 0.209, 0.209, 0.208, 0.21,
          0.211, 0.208, 0.207, 0.209, 0.207, 0.208, 0.207, 0.21, 0.208, 0.207,
          0.208, 0.206, 0.208, 0.207, 0.209, 0.208, 0.208, 0.208, 0.207, 0.209,
          0.205, 0.207, 0.207, 0.205, 0.206, 0.206, 0.206, 0.204, 0.205, 0.205,
          0.204, 0.205, 0.206, 0.204, 0.208, 0.207, 0.204, 0.205, 0.203, 0.204,
        ],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: '出口',
        data: [
          0.2, 0.2, 0.199, 0.198, 0.197, 0.199, 0.201, 0.202, 0.199, 0.199,
          0.201, 0.199, 0.197, 0.199, 0.196, 0.198, 0.197, 0.2, 0.199, 0.198,
          0.2, 0.196, 0.197, 0.195, 0.201, 0.198, 0.198, 0.199, 0.196, 0.199,
          0.194, 0.196, 0.198, 0.196, 0.196, 0.196, 0.197, 0.193, 0.194, 0.194,
          0.191, 0.194, 0.193, 0.194, 0.198, 0.196, 0.194, 0.195, 0.192, 0.194,
        ],
        fill: false,
        borderColor: 'rgb(192, 92, 92)',
        tension: 0.1,
      },
    ],
  };

  const options_O2 = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0.19,
        max: 0.22,
      },
    },
  };

  const chartData_CO2 = {
    labels: Array.from({ length: 50 }, (_, i) => `Day ${i + 1}`), // 生成50个日标签
    datasets: [
      {
        label: '入口',
        data: [
          0.0, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001,
          0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002,
          0.002, 0.003, 0.003, 0.003, 0.003, 0.003, 0.003, 0.003, 0.003, 0.003,
          0.003, 0.004, 0.004, 0.004, 0.004, 0.004, 0.004, 0.004, 0.004, 0.004,
          0.004, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005,
        ],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: '出口',
        data: [
          0.01, 0.011, 0.011, 0.011, 0.011, 0.011, 0.011, 0.011, 0.011, 0.011,
          0.012, 0.012, 0.012, 0.012, 0.012, 0.012, 0.012, 0.012, 0.012, 0.012,
          0.012, 0.013, 0.013, 0.013, 0.013, 0.013, 0.013, 0.013, 0.013, 0.013,
          0.013, 0.014, 0.014, 0.014, 0.014, 0.014, 0.014, 0.014, 0.014, 0.014,
          0.014, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015, 0.015,
        ],
        fill: false,
        borderColor: 'rgb(192, 92, 92)',
        tension: 0.1,
      },
    ],
  };

  const options_CO2 = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 0.02,
      },
    },
  };

  const chartData_RQ = {
    labels: Array.from({ length: 50 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: '呼吸熵 RQ',
        data: [
          0.8980151561297038, 0.8757960493008263, 0.9033708261230102,
          0.9236708652390409, 0.7600625622131721, 0.9292373025617302,
          0.7792347646435057, 0.6463441332735158, 0.8589114458886982,
          0.8816594922628328, 0.9652372210560768, 0.7043525036946404,
          0.743627412546534, 0.6373185153421685, 0.9800816371676471,
          0.7475132120988252, 0.6077124499089656, 0.9398993513427637,
          0.9089697776571326, 0.9919078492106328, 0.7971420356409294,
          0.609089906394913, 0.6772993590265557, 0.6159978968749722,
          0.8511749443562783, 0.7369397419152868, 0.6289943411988043,
          0.9066674361974495, 0.608613130181799, 0.6216556149442445,
          0.695477634974621, 0.8305637259726405, 0.9115409196855,
          0.6019692366768302, 0.8901044441812007, 0.8319758445025877,
          0.6746100852437605, 0.6810702124360553, 0.7938108708035602,
          0.6966671725333549, 0.9218326285160067, 0.6432130863264686,
          0.7918097229409805, 0.7133224825320774, 0.8447258059919359,
          0.7225350657818499, 0.788465667558399, 0.7412031999038841,
          0.9935905263988145, 0.9283386428546523,
        ],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  const options_RQ = {
    scales: {
      y: {
        beginAtZero: false,
        suggestedMin: 0, // 根据实际数据调整
        suggestedMax: 1, // 根据实际数据调整
      },
    },
  };

  const chartData_EE = {
    labels: Array.from({ length: 720 }, (_, i) => `Day ${i + 1}`), // 生成50个日标签
    datasets: [
      {
        label: '总能量消耗 TEE',
        data: [
          58.82026172983832, 52.000786041836115, 54.89368992052869,
          61.204465996007286, 59.33778995074984, 45.113610600617946,
          54.750442087627945, 49.24321395851151, 49.48390574103221,
          52.05299250969186, 50.72021785580439, 57.27136753481488,
          53.80518862573497, 50.60837508246414, 52.21931616372713,
          51.668371636871335, 57.47039536578803, 48.97420868117099,
          51.565338508254506, 45.729521303491374, 37.23505092082961,
          53.2680929772018, 54.322180994297526, 46.28917489796779,
          61.34877311993804, 42.728171627006176, 50.22879258650723,
          49.06408074987083, 57.66389607179229, 57.346793849501424,
          50.77473712848458, 51.89081259801087, 45.561071261849435,
          40.09601765888036, 48.260439253369235, 50.7817448455199,
          56.151453403638605, 56.01189924392206, 48.063365912960236,
          48.48848624712332, 44.75723517466454, 42.89991031410513,
          41.46864904687494, 59.75387697615895, 47.451739091241734,
          47.80962849194407, 43.73602319975037, 53.88745177915955,
          41.93051076221025, 48.93629859893016, 45.52266719403162,
          51.93451248929631, 47.445974312155634, 44.09683907938794,
          49.85908885830673, 52.14165935265209, 50.33258611191584,
          51.512359488698905, 46.828389531595185, 48.18629417006431,
          46.63769776112024, 48.2022341922973, 45.93426858977773,
          41.36858698834162, 50.88713071126877, 47.99109531895869,
          41.84900826516978, 52.31391127762887, 45.463508178083785,
          50.259726978980694, 53.64545281088768, 50.64491455378705,
          55.697003422716506, 43.825870898231734, 52.01170820588774,
          46.575949545298435, 45.64601425409059, 47.105751676177924,
          48.44223733936314, 50.28082671114873, 44.174250796083214,
          54.50413243477094, 52.3283121986523, 42.31878156861388,
          57.441260968978, 59.479445880152916, 55.89389785579825,
          49.10037582093825, 44.64623689244729, 55.272258634655685,
          47.9841152651341, 56.11222535191214, 51.041374890384304,
          54.88319518241856, 51.78183198587201, 53.532865840959744,
          50.0525001036041, 58.92935246952918, 50.6345604635181,
          52.00994681722351, 59.41575348528127, 43.26120469428777,
          43.647575007571334, 54.846983540790056, 44.1343829744292,
          59.71810592824646, 47.93190509620126, 46.26272594279621,
          59.614710132401925, 57.40257395717212, 59.33779480213285,
          54.53022329137693, 45.69387157472649, 59.55032476549517,
          48.659983145243096, 54.012281978981974, 54.73625983886874,
          49.22494953454583, 53.0703968517304, 54.61103335783263,
          51.88212765577815, 44.50299604707903, 51.49119087103028,
          56.63192948343515, 46.52716070134317, 49.25182729836165,
          47.82423224139181, 59.24631864239671, 53.361473785062174,
          52.03730918120555, 46.15041962777342, 52.69624595645909,
          46.62833669671312, 50.15915279137175, 46.82076960810559,
          53.3821664747325, 52.88295408307471, 48.958506222110024,
          51.980033563308226, 44.53469245634747, 42.54371203647197,
          52.19695850632269, 50.83336747686265, 53.17515718446053,
          61.91572387431971, 54.72239743495207, 45.43588887277921,
          55.585081440479264, 43.420462947442395, 47.692076975926454,
          49.65879197337684, 58.56671360824683, 46.276225889757804,
          45.867807306704925, 49.507737377872836, 46.682608568189465,
          55.63317961053254, 44.60034245818288, 44.26265673794449,
          47.81089977627783, 47.50983774653847, 59.64766026908493,
          54.747104034628805, 50.437756206925954, 43.87282240584916,
          54.221814882007735, 44.99892326305218, 42.27614451611194,
          55.94014896176151, 51.58471305962425, 54.60429411890409,
          51.5936382647151, 54.28415305951346, 46.74487203349926,
          44.82878579107768, 53.40797259140813, 45.98295167913079,
          46.552251111249, 47.72233748241329, 50.08739579512528,
          48.23003044373258, 43.125243532909906, 46.781907985835545,
          38.88298423887787, 53.12615725513594, 41.98971172196626,
          44.47808330285775, 50.260825396304874, 46.30218501804343,
          57.71507297703368, 43.53571545138276, 51.33525434674591,
          49.80358590886252, 44.15953251129401, 52.61638330265877,
          49.14226834388876, 53.858952756068334, 54.117520769818654,
          60.81617974640345, 56.68263974718196, 48.154090810287784,
          48.803104112120366, 55.49829797943556, 53.27631865361299,
          53.20065763048796, 41.91521977844583, 49.878369378005324,
          46.309845453971555, 51.39962299521619, 49.50924805178521,
          54.55089454046296, 81.58609107595652, 83.93163981054488,
          77.66790451632029, 75.27776872040874, 77.94975153398725,
          79.9148979306928, 81.8957586777754, 91.29654475345426,
          79.78871424169678, 75.22027499753611, 78.27009112150307,
          77.68202012676953, 82.40740736886731, 72.29601492777688,
          80.31630997100166, 80.78253268982688, 81.16090518100138,
          77.01341965517318, 78.81039135131996, 72.87969545508734,
          77.53340058318904, 77.28569261991642, 82.08025023130713,
          74.21908784089044, 83.90599050854996, 87.47242272245684,
          69.65007487493233, 82.13129365389051, 83.38454017515123,
          76.81281487223886, 78.01364092835601, 79.33559711206522,
          78.51104560299136, 78.45493515476439, 71.61998096835012,
          85.7616578239156, 85.3980929601841, 75.93317870397898,
          72.66787836098743, 82.60532438226379, 77.12106015093467,
          80.7097658166039, 78.40335791427452, 83.45769375535093,
          83.47374571828003, 76.37201310768208, 73.08318022302473,
          72.08530801332459, 83.05189689553603, 74.05570371107986,
          77.46591822850657, 77.01842980774745, 79.73716351865227,
          70.31860097076746, 80.94389298396915, 82.61945511917102,
          80.44211043522331, 78.44556914150765, 80.48700083134392,
          81.99523172820065, 66.13703621786675, 89.77956154125347,
          81.95046661343963, 76.7379570880649, 78.045233124062,
          82.46870888674594, 79.41948030482817, 69.84657766109252,
          90.3224643067966, 79.44729671383763, 85.100863558579,
          76.53975076107804, 87.68188527122899, 81.4317184444614,
          83.04421917237725, 74.77373316926523, 86.05572644841351,
          83.44909082267394, 86.50923114782499, 76.8595622017921,
          77.59486440769606, 91.51958348841971, 74.69992088639226,
          79.32025149660839, 85.68445681301347, 80.48862483857428,
          82.91476839876647, 78.00275485368563, 81.8502794392376,
          73.46736574132342, 88.29065339809094, 79.40917977435716,
          76.59910898001574, 83.33191541015957, 77.69640106305724,
          73.32870764298623, 73.26641247101222, 83.46886576345067,
          79.20213280926866, 79.33149220165781, 85.38871902988132,
          74.36587095621628, 76.34661123567588, 78.07560095409362,
          80.47175794658537, 79.7891427435471, 78.56556403805047,
          79.69186798952177, 79.46347361854413, 76.40197805724104,
          75.93503505722961, 81.3725817886197, 75.54542458502236,
          74.21322370404573, 78.43853874437153, 79.21166491918092,
          91.28361748649104, 76.47649862071883, 84.71630362484747,
          83.73594167102316, 74.05527522398133, 83.866264887013,
          74.08059679903342, 66.7041388100163, 83.0315976217969,
          71.22054708281141, 82.25467230902957, 76.57994551131392,
          88.29775398094937, 85.34254699658004, 77.73307098074307,
          76.56081194485658, 73.9296129845294, 77.79538683853704,
          78.59822252407746, 78.17653227804158, 80.78351927636182,
          82.89260748864439, 81.74827228496586, 76.17928038046779,
          72.8110426309921, 86.82265924051235, 76.55275407725031,
          76.73853200032491, 77.39405343849444, 70.78465224921676,
          77.61012997979756, 77.60172092996027, 83.10179149171756,
          83.49228574553668, 80.01885444543134, 84.65924187057152,
          81.6998249190063, 79.92158944198722, 80.80464084149112,
          79.046732532093, 78.02575242983275, 78.66133231553017,
          74.35994334264997, 81.40220852658148, 75.0343819453521,
          84.20815632036818, 78.75270709919526, 80.24747490825045,
          82.46918388140479, 83.21657232531464, 72.14688295683274,
          78.96548161918014, 84.40089456040391, 71.50947090283873,
          81.93640237697532, 68.72217885298906, 74.88746578182199,
          80.19315275920094, 71.71642448839023, 75.07244631157924,
          72.64082496268206, 88.2406746610378, 80.82113877743667,
          152.83645138926335, 148.88662449742424, 148.23284125621402,
          141.91762905674483, 148.5408131862607, 146.1925389409419,
          154.28961962146167, 155.70550933328786, 157.3328935778709,
          154.26275969730617, 147.00673031538506, 144.42051507019804,
          153.83331590822544, 151.78146408736146, 141.15730774661483,
          151.77740896371884, 154.07259911243932, 150.29462794590816,
          149.0747316449533, 145.96175756191823, 142.76732650218307,
          154.00148974670014, 148.45442777614144, 148.83266669228155,
          158.66360593459567, 153.42250553429596, 151.8541250064055,
          150.71030902593617, 157.59997430382887, 158.597946537081,
          154.64752555739764, 152.91112295698963, 139.52698464396929,
          150.61860957116753, 149.34946522903147, 150.46976614692784,
          154.7152304366126, 136.3016141640522, 147.15343973264908,
          151.34952177470382, 147.66577226973618, 142.9154694343687,
          154.34481743448399, 151.38435952923064, 145.14447714777756,
          151.5740860225791, 154.10792856024898, 150.0264632314968,
          154.00282401715498, 150.3913008758083, 148.02385508672822,
          144.20289741800045, 149.57034616514193, 150.97146469022886,
          154.37916380793666, 149.42446265756388, 152.28707803110495,
          145.17693993133136, 146.08685422086236, 149.44805350486556,
          144.72685768007494, 154.10123918662342, 152.31565164659304,
          151.39547882196226, 151.69452062607974, 160.105217807424,
          147.65567906016602, 138.99279357249722, 150.99650098448234,
          149.74698229519166, 147.412404787448, 145.10585070320616,
          147.80405239098926, 150.9066921460891, 147.4859164967873,
          162.06226839771875, 145.19747809183426, 146.03441318646165,
          138.55689979992735, 151.25742207510768, 139.9179668610012,
          147.30272683312748, 148.62164732719722, 146.45136017076555,
          158.69436338727255, 154.9719719565775, 156.59568438150788,
          145.58790590725042, 155.64297032257284, 152.48000473171982,
          153.85702974338423, 155.14719414391385, 145.45618377020475,
          147.8784118951105, 154.31298005664226, 136.72190453512533,
          157.56664041286604, 152.76566032103793, 149.77148019669883,
          151.10253827878586, 144.85032358345512, 148.25028317705448,
          155.50142169110188, 156.4901098616311, 163.4811202628179,
          149.63037666859793, 146.707235165975, 147.42883017030005,
          144.90979062356317, 149.61072622029576, 151.91366215006133,
          149.82878859734024, 155.481734228329, 148.8289209932773,
          148.26274673750717, 147.09365761569836, 141.83682736882753,
          142.16116137845773, 144.10421034681156, 156.5071403583238,
          154.47630136444965, 86.87482033196495, 73.33894172702749,
          70.1568765510699, 76.69971839932958, 80.87909476648014,
          82.49345137454914, 85.23986077984026, 81.42139835403607,
          88.71334390327816, 78.8869715952584, 75.43460390979102,
          71.59390892252783, 75.55514320952275, 81.21058980492562,
          75.55639871323184, 84.68371231767628, 87.06163853018721,
          68.15206547386698, 84.32026150248824, 68.80197970669131,
          82.00749527545143, 86.1243528209683, 80.32428053171787,
          73.60155413397881, 77.07284397861113, 78.6917727714455,
          79.08877608105028, 78.98551579616667, 79.45058610345343,
          81.06740024455084, 73.95713173133389, 78.7899008506489,
          87.59130585177853, 78.07677288428741, 77.78081953422401,
          85.3909865185712, 67.20407666827951, 85.90689300644144,
          76.84048120997416, 80.81964286226294, 80.48160677960598,
          84.71234059610197, 78.66202626882327, 76.60987109217774,
          86.48922895325549, 68.17913091429409, 80.10167090852622,
          73.2603728868544, 76.1921330587172, 90.05628340731569,
          79.77702286772072, 80.97534848575691, 71.09218572147205,
          76.35477670602653, 80.98278700364392, 81.77378846556608,
          83.08443277196639, 80.04313949458788, 82.6350210422733,
          82.26890956317843, 70.85129794497735, 80.18502860955074,
          83.83951203866351, 82.94939910367259, 78.18070595014605,
          75.97186746230317, 74.40844037839184, 79.34472994229294,
          85.66539939779861, 70.24097949259199, 76.70054135135251,
          74.30098772286613, 83.9247876062025, 77.22845186714349,
          77.64681170922604, 78.91525215031676, 82.226966254474,
          78.03805500925182, 64.76928472600036, 82.7165594569376,
          82.19521478836022, 78.90229485834394, 74.57981689664032,
          81.75890055340679, 81.89617766767793, 77.64983558649563,
          78.9163426471223, 75.3492174873784, 79.10705453956335,
          72.2478532745826, 82.08659410515918, 75.27815754587853,
          81.19051573916155, 72.9701854186605, 77.0497117706523,
          79.44755297467036, 71.69650094065368, 80.57573936570046,
          78.10426218560039, 71.28821901095385, 73.48378622943842,
          83.02560042041084, 84.47777992775661, 79.34045680110016,
          82.02380906020248, 81.11921781656456, 81.6481149106387,
          86.42992003540147, 72.46500800892863, 83.38230366180812,
          78.0899552221109, 78.8787053287418, 78.48875134772464,
          78.12426441669358, 73.8690190410849, 80.91669599628801,
          88.35471516394429, 79.71933489775621, 79.99307478632453,
          76.56350481421669, 79.41262726790944, 82.33083213017015,
          78.14878779647829, 77.73097979474, 82.01632270081623,
          75.40997615090477, 81.26248313538436, 84.10160898630711,
          86.79974270839742, 79.54808996361527, 86.83798619903357,
          85.17204943240759, 75.01893679814467, 73.91030744203425,
          78.4751818107279, 85.14467746297427, 79.63856496219998,
          76.99671221171106, 87.7612159002428, 81.43452244001674,
          68.39702862104629, 81.58580313146345, 82.60020307285434,
          81.12804327235551, 82.24856050115996, 79.6636219553851,
          73.40802065177633, 78.14647998389773, 75.27192102221855,
          75.33629544602812, 73.68465825448862, 82.26244546319823,
          80.48948072706314, 77.75917318659646, 76.75331036134806,
          79.88288447489273, 85.39597364056245, 69.97892142250542,
          81.88438260425447, 77.27144012991108, 70.57707077510275,
          70.2714845841802, 75.43608252932354, 81.09754777896522,
          81.96531466990047, 75.30509213661108, 85.08510495706622,
          87.11491748258052, 81.9804329247828, 77.04298666095944,
          85.62209592255184, 83.77697847831669, 84.33703705677459,
          76.71768162514235, 65.8272274736265, 90.58395510741838,
          71.94560798275033, 79.8211596406989, 91.90372675609875,
          51.65288378137187, 54.74623236779118, 42.488017153091434,
          41.11166522633147, 47.33648604010223, 55.4537486721725,
          48.26875276176345, 46.026818394642504, 50.989836449724834,
          55.40967609238633, 42.77529900463314, 43.94728502938324,
          46.05665372745317, 55.47319187356046, 51.17410762974366,
          60.66076705285222, 54.68222862915558, 49.82452411565165,
          56.32538919044383, 51.05748506365939, 46.475393237462775,
          53.39987422122551, 46.51836673069459, 48.54801449598067,
          56.63891347978991, 49.493592568913, 45.98429306329186,
          47.67831154282254, 55.10895292794336, 47.237296632916355,
        ],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options_EE = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 200,
      },
    },
  };

  return (
    <div>
      <div>
        <div className="stats shadow w-full">
          <div className="stat">
            <label className="swap">
              <input type="checkbox" />
              <div className="swap-on">ON</div>
              <div className="swap-off">OFF</div>
            </label>
          </div>

          <div className="stat">
            <ul className="menu menu-horizontal bg-base-200">
              <li>
                <div className="stat-title">舱体体积</div>
                <div className="stat-value">25000 L</div>
              </li>
              <li>
                <div className="stat-title">流量</div>
                <div className="stat-value">420 L/min</div>
              </li>
              <li>
                <div className="stat-title">算法</div>
                <div className="stat-value">Henning</div>
              </li>
            </ul>
          </div>

          <div className="stat">
            <ul className="menu menu-horizontal bg-base-200">
              <li>
                <div className="stat-title">姓名</div>
                <div className="stat-value">晴天</div>
              </li>
              <li>
                <div className="stat-title">性别</div>
                <div className="stat-value">男</div>
              </li>
              <li>
                <div className="stat-title">年龄</div>
                <div className="stat-value">4</div>
              </li>
              <li>
                <div className="stat-title">身高</div>
                <div className="stat-value">178 cm</div>
              </li>
              <li>
                <div className="stat-title">体重</div>
                <div className="stat-value">55 kg</div>
              </li>
              <li>
                <div className="stat-title">入舱时间</div>
                <div className="stat-value">2024/04/15 13:50:01</div>
              </li>
              <li>
                <div className="stat-title">出舱时间</div>
                <div className="stat-value">2024/04/16 13:50:00</div>
              </li>
              <li>
                <div className="stat-title">备注</div>
                <div className="stat-value">重症室</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>

        <div>
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>采集时间</th>
                  <th>O2 浓度 i</th>
                  <th>CO2 浓度 i</th>
                  <th>湿度 i</th>
                  <th>温度 i</th>
                  <th>压力 i</th>
                  <th>O2 浓度 o</th>
                  <th>CO2 浓度 o</th>
                  <th>湿度 o</th>
                  <th>温度 o</th>
                  <th>压力 o</th>
                  <th>流量</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover">
                  <th>2024/04/15 13:50:01</th>
                  <td>20.9431</td>
                  <td>0.03911</td>
                  <td>22.1</td>
                  <td>50.4</td>
                  <td>101.3</td>
                  <td>20.7311</td>
                  <td>0.4212</td>
                  <td>22.3</td>
                  <td>50.2</td>
                  <td>101.1</td>
                  <td>420</td>
                </tr>
                <tr className="hover">
                  <th>2024/04/15 13:50:03</th>
                  <td>20.9424</td>
                  <td>0.03914</td>
                  <td>22.1</td>
                  <td>50.4</td>
                  <td>101.3</td>
                  <td>20.7311</td>
                  <td>0.4212</td>
                  <td>22.3</td>
                  <td>50.2</td>
                  <td>101.1</td>
                  <td>420</td>
                </tr>
                <tr className="hover">
                  <th>2024/04/15 13:50:05</th>
                  <td>20.9421</td>
                  <td>0.03951</td>
                  <td>22.1</td>
                  <td>50.4</td>
                  <td>101.3</td>
                  <td>20.7311</td>
                  <td>0.4212</td>
                  <td>22.3</td>
                  <td>50.2</td>
                  <td>101.1</td>
                  <td>420</td>
                </tr>
                <tr className="hover">
                  <th>2024/04/15 13:50:07</th>
                  <td>20.9421</td>
                  <td>0.03951</td>
                  <td>22.1</td>
                  <td>50.4</td>
                  <td>101.3</td>
                  <td>20.7311</td>
                  <td>0.4212</td>
                  <td>22.3</td>
                  <td>50.2</td>
                  <td>101.1</td>
                  <td>420</td>
                </tr>
                <tr className="hover">
                  <th>2024/04/15 13:50:09</th>
                  <td>20.9421</td>
                  <td>0.03951</td>
                  <td>22.1</td>
                  <td>50.4</td>
                  <td>101.3</td>
                  <td>20.7311</td>
                  <td>0.4212</td>
                  <td>22.3</td>
                  <td>50.2</td>
                  <td>101.1</td>
                  <td>420</td>
                </tr>
                <tr className="hover">
                  <th>2024/04/15 13:50:11</th>
                  <td>20.9421</td>
                  <td>0.03951</td>
                  <td>22.1</td>
                  <td>50.4</td>
                  <td>101.3</td>
                  <td>20.7311</td>
                  <td>0.4212</td>
                  <td>22.3</td>
                  <td>50.2</td>
                  <td>101.1</td>
                  <td>420</td>
                </tr>
                <tr className="hover">
                  <th>2024/04/15 13:50:13</th>
                  <td>20.9421</td>
                  <td>0.03951</td>
                  <td>22.1</td>
                  <td>50.4</td>
                  <td>101.3</td>
                  <td>20.7311</td>
                  <td>0.4212</td>
                  <td>22.3</td>
                  <td>50.2</td>
                  <td>101.1</td>
                  <td>420</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="divider"></div>

        <div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">O2 浓度</h2>
                  <LineChartComponent
                    chartData={chartData_O2}
                    options={options_O2}
                  />
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">CO2 浓度</h2>
                  <LineChartComponent
                    chartData={chartData_CO2}
                    options={options_CO2}
                  />
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">呼吸熵 RQ</h2>
                  <LineChartComponent
                    chartData={chartData_RQ}
                    options={options_RQ}
                  />
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">总能量消耗 TEE</h2>
                  <LineChartComponent
                    chartData={chartData_EE}
                    options={options_EE}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
