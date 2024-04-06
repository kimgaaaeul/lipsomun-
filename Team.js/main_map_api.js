// var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
//     mapOption = { 
//         center: new kakao.maps.LatLng(37.5261, 127.0452), // 지도의 중심좌표
//         level: 6 // 지도의 확대 레벨
//     };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// // 마커를 표시할 위치와 title 객체 배열입니다 
// var positions = [
//     {
//         title: '브레디포스트 성수', 
//         latlng: new kakao.maps.LatLng(37.544498204066336, 127.04912363066825)
//     },
//     {
//         title: '봉땅 서울숲점', 
//         latlng: new kakao.maps.LatLng(37.547408881409964, 127.04337242551318)
//     },
//     {
//         title: 'LOWIDE', 
//         latlng: new kakao.maps.LatLng(37.54693398734109, 127.04104104449537)
//     },
//     {
//         title: '퍼먼트',
//         latlng: new kakao.maps.LatLng(37.546627040702006, 127.04275185564212)
//     },
//     {
//         title: '포도빵집',
//         latlng: new kakao.maps.LatLng(37.548400123799944, 127.04297919367599)
//     },
//     {
//         title: '포레스트',
//         latlng: new kakao.maps.LatLng(37.54770812890179, 127.04305574628212)
//     }
// ];

// // 마커 이미지의 이미지 주소입니다
// var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
// for (var i = 0; i < positions.length; i ++) {
    
//     // 마커 이미지의 이미지 크기 입니다
//     var imageSize = new kakao.maps.Size(24, 35); 
    
//     // 마커 이미지를 생성합니다    
//     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
//     // 마커를 생성합니다
//     var marker = new kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: positions[i].latlng, // 마커를 표시할 위치
//         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//         image : markerImage // 마커 이미지 
//     });
// }



