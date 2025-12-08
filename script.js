document.addEventListener('DOMContentLoaded', () => {
    console.log('LOVEPET 웹사이트가 로드되었습니다.');
});
// 1. 네비게이션 부드러운 스크롤링
    // 페이지 내 앵커 링크 클릭 시 부드럽게 이동 (#about, #services, #contact 등)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            // 'hero' 섹션의 버튼에서 사용된 scrollToSection 함수 호출 대신, 
            // 일반 앵커 링크는 네이티브 scrollIntoView를 사용합니다.
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
 // 2. 카드 클릭 이벤트 처리: 전체 카드 클릭 시 해당 링크로 이동
    const petCards = document.querySelectorAll('.pet-card');
    petCards.forEach(card => {
        card.addEventListener('click', (e) => {
            
            // <a> 태그('.card-link') 자체나 그 자식 요소를 클릭했다면 
            // <a> 태그의 기본 동작(페이지 이동)에 맡기고 함수를 종료합니다.
            if (e.target.closest('.card-link')) {
                return;
            }

            // <a> 태그 외의 영역 (아이콘, 제목, 설명, 빈 공간)을 클릭한 경우
            const linkElement = card.querySelector('.card-link');
            const targetUrl = linkElement ? linkElement.getAttribute('href') : null;
            
            if (targetUrl && targetUrl !== '#' && targetUrl.length > 0) {
                // 해당 페이지로 이동합니다.
                window.location.href = targetUrl;
            } else {
                // 카드에 설정된 링크가 없거나(#) 잘못된 경우
                const petType = card.getAttribute('data-pet');
                alert(`${petType} 상세 정보 페이지의 링크를 찾을 수 없습니다.`);
            }
        });
    });
// 3. 메인 버튼 스크롤 함수 (onclick 이벤트에서 호출)
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
// 4. 스크롤 시 헤더 그림자 강조 (전문성/시각적 효과 추가)
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});