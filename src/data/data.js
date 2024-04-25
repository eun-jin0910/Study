const data = [
    {
        chapter: 1,
        title: "요구사항 확인",
        items: [
            {
                question: "여러 번의 소프트웨어 개발 과정을 거쳐 점진적으로 완벽한 최종 소프트웨어를 개발하는 모형",
                answer: "나선형 모형",
            },
            {
                question: "요구사항 변화에 유연하게 대응할 수 있도록 일정한 주기를 반복하면서 개발하는 모형",
                answer: "애자일 모형",
            },
            {
                question: "각 단계를 확실히 매듭짓고 그 결과를 철저하게 검토하여 승인 과정을 거친 후에 다음 단계를 진행하는 개발 방법론",
                answer: "폭포수 모형",
            },
            {
                question: "요구사항에 유연하게 대응하기 위해 고객의 참여와 개발 과정의 반복을 극대화하여 개발 생산성을 향상시키는 방법",
                answer: "XP(eXtreme Programming)",
            },
            {
                question: "매일 정해진 시간, 장소에서 짧은 시간의 개발을 하는 팀을 위한 프로젝트 관리 중심 방법론",
                answer: "스크럼(SCRUM)",
            },
            {
                question: "도요타의 린 시스템 품질기법을 소프트웨어 개발 프로세스에 적용해서 낭비 요소를 제거하여 품질을 향상시킨 방법론",
                answer: "린(LEAN)",
            },
            // 객체 지향 기법
            {
                question: "서로 연관된 데이터와 함수를 함께 묶어 외부와 경계를 드러내는 기법",
                answer: "캡슐화(Encapsulation)",
            },
            {
                question: "상위 클래스의 속성과 메서드를 하위 클래스에서 재정의 없이 물려받아 사용하는 기법",
                answer: "상속성(Inheritance)",
            },
            {
                question: "상속받은 여러 개의 하위 객체들이 다른 형태의 특성을 갖는 객체로 이용될 수 있는 성질",
                answer: "다형성(Polymorphism)",
            },
            {
                question: "공통 성질을 추출하여 추상 클래스를 설정하는 기법",
                answer: "추상화(Abstraction)",
            },
            {
                question: "코드 내부 데이터와 메서드를 숨기고 공개 인터페이스를 통해서만 접근이 가능하도록 하는 코드 보안 기술",
                answer: "정보 은닉(Information Hiding)",
            },
            // 객체 지향 설계 원칙
            {
                question: "객체 지향 설계 원칙 중 소프트웨어의 컴포넌트는 단 하나의 책임만을 가져야 하는 원칙",
                answer: "단일 책임 원칙(SRP; Single Responsiblity Principle)",
            },
            {
                question: "객체 지향 설계 원칙 중 확장에 대해선 열려 있어야 하고 수정에 대해선 닫혀 있어야 하는 원칙",
                answer: "개방 폐쇄 원칙(OCP; Open Close Principles)",
            },
            {
                question: "객체 지향 설계 원칙 중 자식 클래스는 부모 클래스에서 가능한 행위를 수행 할 수 있어야 하는 원칙",
                answer: "리츠코프 치환 원칙(LSP; Liskov Substitution Principle)",
            },
            {
                question: "객체 지향 설계 원칙 중 하나의 일반적인 인터페이스보단 여러 개의 구체적인 인터페이스가 낫다는 원칙",
                answer: "인터페이스 분리의 원칙(ISP; Interface Segregation Principle)",
            },
            {
                question: "객체 지향 설계 원칙 중 의존관계를 맺을 때, 변화하기 쉬운 것보단 변화하기 어려운 것에 의존해야 한다는 원칙",
                answer: "의존관계 역전 원칙(DIP; Dependency Inversion Principle)",
            },
            // 디자인 패턴
            {
                question: "소프트웨어 설계에서 공통으로 발생하는 문제에 대해 자주 쓰이는 설계 방법을 정리한 패턴",
                answer: "디자인 패턴"
            },
            {
                question: "객체 인스턴스 생성에 관여하고 클래스 정의와 객체 생성 방식을 구조화, 캡슐화 하는 패턴",
                answer: "생성패턴"
            },
            {
                question: "클래스나 객체의 조합을 다루는 패턴",
                answer: "구조패턴"
            },
            {
                question: "클래스나 객체들이 상호 작용하는 방법과 역할 분담을 다루는 패턴",
                answer: "행위패턴"
            },
            {
                question: "구체적인 클래스에 의존하지 않고 서로 연관되거나 의존적인 객체들의 조합을 만드는 인터페이스를 제공",
                answer: "Abstract Factory"
            },
            {
                question: "복잡한 인스턴스를 조립해서 만드는 구조",
                answer: "Builder"
            },
            {
                question: "상위 클래스에서 객체를 생성하는 인터페이스를 정의하고, 하위 클래스에서 인스턴스를 생성하도록 하는 방식으로, 객체 생성 처리를 서브 클래스로 분리해 처리하도록 캡슐화 하는 패턴",
                answer: "Factory Method"
            },
            {
                question: "처음부터 일반적인 원형을 만들어 놓고 그것을 복사한 후 필요한 부분만 수정해서 사용하는 패턴",
                answer: "Prototype"
            },
            {
                question: "전역 변수를 사용하지 않고 객체를 하나만 생성하도록 하며, 생성된 객체를 어디서든지 참조할 수 있도록 함",
                answer: "Singleton"
            },
            {
                question: "기존에 생성된 클래스를 재사용할 수 있도록 중간에서 맞춰주는 역할을 하는 인터페이스를 만드는 패턴",
                answer: "Adapter"
            },
            {
                question: "기능의 클래스 계층과 구현의 클래스 계층을 연결하고, 구현부에서 추상 계층을 분리하여 추상화된 부분과 실제 구현 부분을 독립적으로 확장할 수 있는 디자인 패턴",
                answer: "Bridge"
            },
            {
                question: "객체들의 관계를 트리 구조로 구성하여 부분-전체 계층을 표현하는 패턴",
                answer: "Composite"
            },
            {
                question: "기존에 구현되어 있는 클래스에 필요한 기능을 추가해 나가는 설계 패턴",
                answer: "Decorator"
            },
            {
                question: "복잡한 시스템에 대해 단순한 인터페이스를 제공함으로써 사용자의 시스템 간 또는 다른 시스템과의 결합도를 낮추어 시스템 구조에 대한 파악을 쉽게 하는 패턴",
                answer: "Facade"
            },
            {
                question: "다수의 객체로 생성될 경우 모두가 갖는 본질적인 요소를 클래스화하여 공유함으로써 메모리를 절약하고 클래스의 경량화를 목적으로 하는 디자인 패턴",
                answer: "Flyweight"
            },
            {
                question: "‘실체 객체에 대한 대리 객체’로 실체 객체에 대한 접근 이전에 필요한 행동을 취할 수 있게 만들며, 이 점을 이용해 미리 할당하지 않아도 상관 없는 것들을 실제 이용할 때 할당하게 하여 메모리 용량을 아낄 수 있으며, 실체 객체를 드러나지 않게 하여 정보은닉의 역할도 수행하는 디자인 패턴",
                answer: "Proxy"
            },
            {
                question: "실행될 기능을 캡슐화함으로써 주어진 여러 기능을 실행할 수 있는 재사용성이 높은 클래스를 설계하는 패턴",
                answer: "Command"
            },
            {
                question: "한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들에 연락이 가고 자동으로 내용이 갱신되는 방법으로 일대 다의 의존성을 가지며 상호 작용하는 객체 사이에서는 가능하면 느슨하게 결합하는 디자인 패턴",
                answer: "Observer"
            },
            {
                question: "어떤 작업을 처리하는 일부분을 서브 클래스로 캡슐화해 전체 일을 수행하는 구조는 바꾸지 않으면서 특정 단계에서 수행하는 내역을 바꾸는 패턴으로, 상위 작업의 구조는 바꾸지 않으면서 서브 클래스로 작업의 일부분을 수행",
                answer: "Template Method"
            },
            {
                question: "객체 지향 설계에서 객체의 수가 너무 많아져 통신이 복잡해지면 느슨한 결합을 해칠 수 있기 때문에 중간에서 이를 통제하고 지시할 수 있는 중재자 역할을 하는 패턴",
                answer: "Mediator"
            },
            {
                question: "언어의 다양한 해석, 구체적으로 구문을 나누고 그 분리된 구문의 해석을 맡는 클래스를 각각 작성해 여러 형태의 언어 구문을 해석할 수 있게 만드는 패턴",
                answer: "Interpreter"
            },
            {
                question: "컬렉션 구현 방법을 노출시키지 않으면서도 그 집합체 안에 들어있는 모든 항목에 반복자를 사용하여 접근할 수 있는 디자인 패턴",
                answer: "Iterator"
            },
            {
                question: "객체 상태를 캡슐화해서 클래스화함으로써 그것을 참조하게 하는 방식",
                answer: "State"
            },
            {
                question: "각 클래스의 데이터 구조로부터 처리 기능을 분리하여 별도의 클래스를 만들어 놓고 해당 클래스의 메서드가 각 클래스를 돌아다니며 특정 작업을 수행하도록 만드는 패턴",
                answer: "Visitor"
            },
            {
                question: "알고리즘 군을 정의하고(추상 클래스) 같은 알고리즘을 각각 하나의 클래스로 캡슐화한 후, 필요할 때 서로 교환해서 사용할 수 있게 하는 패턴",
                answer: "Strategy"
            },
            {
                question: "클래스 설계 관점에서 객체의 정보를 저장할 필요가 있을 때 적용하는 디자인 패턴",
                answer: "Memento"
            },
            {
                question: "정적으로 어떤 기능에 대한 처리의 연결이 하드코딩 되어 있을 때 기능 처리의 연결 변경이 불가능한데, 이를 동적으로 연결되어 있는 경우에 따라 다르게 처리될 수 있도록 연결한 디자인 패턴",
                answer: "Chain of Responsibility"
            },
            // 정형 기술 검토 활용
            {
                question: "2~3명 리뷰 진행, 요구사항 명세서를 설명하고 이해관계자들이 들으면서 결함을 발견하는 형태로 진행",
                answer: "동료 검토"
            },
            {
                question: "검토 자료를 회의 전에 배포하여 짧은 시간동안 회의를 진행하는 형태로 리뷰를 통해 오류를 검출하고 문서화",
                answer: "워크 스루"
            },
            {
                question: "소프트웨어 요구, 설계 원시 코드 등의 저작자 외의 다른 전문가 또는 팀이 검사하여 오류를 찾아내는 공식적 검토 방법",
                answer: "인스펙션"
            },

        ]
    },
    {
        chapter: 2,
        title: "화면 설계",
        items: [
            // {
            //     question: "명령어를 텍스트로 입력하여 조작하는 사용자 인터페이스",
            //     answer: "CLI(Command Line Interface)"
            // },
            // {
            //     question: "그래픽 환경을 기반으로 한 마우스나 전자펜을 이용하는 사용자 인터페이스",
            //     answer: "GUI(Graphical User Interface)"
            // },
            // {
            //     question: "키보드나 마우스 없이 신체 부위를 이용하는 사용자 인터페이스",
            //     answer: "NUI(Natural User Interface)"
            // },
            // {
            //     question: "현실에 존재하는 모든 사물이 입출력장치로 변화할 수 있는 사용자 인터페이스",
            //     answer: "OUI(Oraganic User Interface)"
            // },
            {
                question: "객체 지향 소프트웨어 개발 과정에서 산출물을 명세화, 시각화, 문서화할 때 사용되는 모델링 기술과 방법론을 통합해서 만든 표준화된 범용 모델링 언어로 사물, 관계, 다이어그램으로 구성된다.",
                answer: "UML(Unified Modeling Language)"
            },
            {
                question: "객체 지향 모델링 시 클래스의 속성 및 연산과 클래스 간 정적인 관계를 표현한 다이어그램으로, 클래스 이름, 속성, 연산, 접근 제어자, 관계로 구성된다.",
                answer: "클래스 다이어그램"
            },
            {
                question: "시스템이 제공하고 있는 기능 및 그와 관련된 외부 요소를 사용자의 관점에서 표현하는 다이어그램",
                answer: "유스케이스 다이어그램"
            },
            {
                question: "시스템의 서로 다른 패키지들 사이의 의존 관계를 표현하기 위한 다이어그램으로, 패키지, 의존관계로 구성된다.",
                answer: "패키지 다이어그램"
            },

        ]
    },
    {
        chapter: 3,
        title: "데이터 입출력 구현",
        items: [
            {
                question: "행(Row)와 열(Column)로 구성된 테이블",
                answer: "릴레이션(Relation)"
            },
            {
                question: "릴레이션의 행(Row)에 해당되는 요소",
                answer: "튜플(Tuple)"
            },
            {
                question: "릴레이션의 열(Column)에 해당되는 요소",
                answer: "속성(Attribute)"
            },
            {
                question: "행(Row), 튜플(Row)의 수",
                answer: "카디널리티(Cardinality)"
            },
            {
                question: "열(Column), 어트리뷰트의 수",
                answer: "차수(Degree)"
            },
            {
                question: "데이터베이스의 구조, 제약 조건 등의 정보를 담고 있는 기본적인 구조",
                answer: "스키마(Schema)"
            },
            {
                question: "정의된 스키마에 따라 생성된 테이블에 실제 저장된 데이터의 집합",
                answer: "인스턴스(Instance)"
            },
            {
                question: "튜플 관계 해석과 도메인 관계 해석을 하는 비절차적 언어이다. 프레디킷 해석(Predicate Calculus)에 기반한 언어이며 비절차적 언어(원하는 정보가 무엇이라는 것만 선언)",
                answer: "관계 해석(Relational Calculus)"
            },
            {
                question: "정보 저장 시 해당 정보의 불필요한 세부정보를 입력해야 하는 경우 이상 현상",
                answer: "삽입 이상"
            },
            {
                question: "정보 삭제 시 원치 않는 다른 정보가 같이 삭제되는 경우 이상 현상",
                answer: "삭제 이상"
            },
            {
                question: "중복 데이터 중에서 특정 부분만 수정되어 중복된 값이 모순을 일으키는 경우 이상 현상",
                answer: "갱신 이상"
            },
            {
                question: "릴레이션에서 기본 키가 복합 키일 경우 기본 키를 구성하는 속성 중 일부에게 종속된 경우",
                answer: "부분 함수 종속"
            },
            {
                question: "릴레이션에서 X→Y 관계가 있을 때, Y는 X의 전체 속성에 대해 종속하고, 부분 집합 속성에 종속하지 않는 경우",
                answer: "완전 함수 종속"
            },
            {
                question: "릴레이션에서 X→Y, Y→Z 종속 관계가 있을 때, X→Z가 성립되는 경우",
                answer: "이행 함수 종속"
            },
            {
                question: "한 엔터티에서 같은 기본 키(PK)를 가질 수 없거나, 기본 키(PK)의 속성이 NULL을 허용할 수 없는 제약 조건 ",
                answer: "개체 무결성(Entity Integrity)"
            },
            {
                question: "외래 키가 참조하는 다른 개체의 기본 키에 해당하는 값이 기본 키값이나 NULL이어야 하는 제약 조건",
                answer: "참조 무결성(Referential Integrity)"
            },
            {
                question: "속성의 값은 기본값, NULL 여부, 도메인(데이터 타입, 길이)이 지정된 규칙을 준수해야 하는 제약 조건",
                answer: "속성 무결성(Attribute Integrity)"
            },
            {
                question: "사용자의 의미적 요구사항을 준수해야 하는 제약 조건",
                answer: "사용자 정의 무결성(User-Defined Integrity)"
            },
            {
                question: "한 릴레이션에 같은 킷값을 가진 튜플들을 허용할 수 없는 제약 조건",
                answer: "키 무결성(Key Integrity)"
            },
            {
                question: "테이블의 각 튜플들을 고유하게 식별하는 컬럼",
                answer: "기본 키(Primary Key)"
            },
            {
                question: "후보 키 중에서 기본 키로 선택되지 않은 키",
                answer: "대체 키(Alternate Key)"
            },
            {
                question: "테이블에서 각 튜플을 구별하는데 기준이 되는 컬럼으로, 기본 키와 대체 키를 합친 키, 유일성, 최소성",
                answer: "후보 키(Candidate Key)"
            },
            {
                question: "릴레이션을 구성하는 모든 튜플에 대해 유일성은 만족하지만, 최소성은 만족하지 못하는 키",
                answer: "슈퍼 키(Super Key)"
            },
            {
                question: "테이블 간의 참조 데이터 무결성을 위한 제약 조건으로, 한 릴레이션의 컬럼이 다른 릴레이션의 기본 키로 이용되는 키",
                answer: "외래 키(Foreign Key)"
            },
        ]
    },
    {
        chapter: 4,
        title: "통합 구현",
        items: [
            {
                question: "기업에서 운영되는 서로 다른 플랫폼 및 애플리케이션 간의 정보를 전달, 연계, 통합이 가능하도록 해주는 솔루션.",
                answer: "EAI(Enterprise Application Integration)"
            },
            {
                question: "EAI 구축 유형 중 가장 기초적인 애플리케이션 통합방법으로 1:1 단순 통합 방법 ",
                answer: "포인트 투 포인트(Point-to-point)"
            },
            {
                question: "EAI 구축 유형 중 단일한 접점의 허브 시스템을 통하여 데이터를 전송하는 중앙 집중식 방식",
                answer: "허브 앤 스포크(Hub & Spoke)"
            },
            {
                question: "EAI 구축 유형 중 애플리케이션 사이 미들웨어(버스)를 두어 연계하는 미들웨어 통합 방식",
                answer: "메시지 버스(Message Bus)"
            },
            {
                question: "EAI 구축 유형 중 그룹 내는 허브 앤 스포크 방식을 사용하고, 그룹 간에는 메시지 버스 방식을 사용하는 통합 방식",
                answer: "하이브리드(Hybrid)"
            },
            {
                question: "기업에서 운영되는 서로 다른 플랫폼 및 애플리케이션들 간을 하나의 시스템으로 관리 운영할 수 있도록 서비스 중심의 통합을 지향하는 아키텍처",
                answer: "ESB(Enterprise Service Bus)"
            },
            {
                question: "인터넷에서 웹 서버와 사용자의 인터넷 브라우저 사이에 문서를 전송하기 위해 사용되는 통신 규약",
                answer: "HTTP"
            },
            {
                question: "문자, 그래픽, 음성 및 영상을 하나의 연상 거미집과 같이 서로 연결시켜, 제시된 순서에 관계없이 이용자가 관련된 정보를 검색할 수 있도록 하는 정보 제공 방법",
                answer: "Hypertext"
            },
            {
                question: "웹 페이지 표시를 위해 개발된 지배적인 마크업 언어",
                answer: "HTML"
            },
            {
                question: "HTTP, HTTPS, SMTP 등을 사용하여 XML 기반의 메시지를 네트워크 상태에서 교환하는 프로토콜",
                answer: "SOAP(Simple Object Access Protocol)"
            },
            {
                question: "웹 서비스명, 제공 위치, 메시지 포맷, 프로토콜 정보 등 웹서비스에 대한 상세 정보가 기술된 XML 형식으로 구현되어 있는 언어",
                answer: "WSDL(Web Service Description Language)"
            },
            {
                question: "웹 서비스에 대한 정보인 WSDL을 등록하고 검색하기 위한 저장소로 공개적으로 접근, 검색이 가능한 레지스트리이자 표준",
                answer: "UDDI(Universal Description, Discovery and Integration)"
            },
            {
                question: "운영체제에서 프로세스 간 서로 데이터를 주고받기 위한 통신 기술",
                answer: "IPC(Inter-Process Communication)"
            },
        ]
    },
    {
        chapter: 5,
        title: "인터페이스 구현",
        items: [
            {
                question: "IP 계층(3계층)에서 무결성과 인증을 보장하는 인증 헤더(AH)와 기밀성을 보장하는 암호화(ESP)를 이용하여 양 종단 간(End Point) 구간에 보안 서비스를 제공하는 터널링 프로토콜",
                answer: "IPSec(IP Security)"
            },
            {
                question: "전송계층(4계층)과 응용계층(7계층) 사이에서 클라이언트와 서버 간의 웹 데이터 암호화(기밀성), 상호 인증 및 전송 시 데이터 무결성을 보장하는 보안 프로토콜",
                answer: "SSL/TLS"
            },
            {
                question: "웹상에서 네트워크 트래픽을 암호화하는 주요 방법 중 하나로서 클라이언트와 서버 간에 전송되는 모든 메시지를 암호화하여 전송",
                answer: "S-HTTP"
            },
        ]
    },
    {
        chapter: 6,
        title: "프로그래밍 언어 활용",
        items: [
        ]
    },
    {
        chapter: 7,
        title: "SQL 응용",
        items: [
            {
                question: "인가받지 않은 사용자로부터 데이터를 보장하기 위해 DBMS가 가져야 하는 특성이자, 데이터베이스 시스템에서 하나의 논리적 기능을 정상적으로 수행하기 위한 작업의 기본 단위이다. 원자성(Atomicity), 일관성(Consistency), 격리성(Isolation), 영속성(Durability)의 특성을 가진다.",
                answer: "트랜잭션(Transaction)"
            },
            {
                question: "다수 사용자 환경에서 여러 트랜잭션을 수행할 때, 데이터베이스 일관성 유지를 위해 상호 작용을 제어하는 기법으로, 로킹, 타임 스탬프 순서가 있다.",
                answer: "병행 제어(Concurrency Control)"
            },
            {
                question: "같은 자원을 액세스하는 다중 트랜잭션 환경에서 DB의 일관성과 무결성을 유지하기 위해 트랜잭션의 순차적 진행을 보장하는 직렬화 기법",
                answer: "로킹(Locking)"
            },
            {
                question: "트랜잭션을 수행하는 도중 장애로 인해 손상된 데이터베이스를 손상되기 이전의 정상적인 상태로 복구시키는 작업",
                answer: "회복 기법(Recovery)"
            },
            {
                question: "회복 기법 중 오류가 발생하기 전까지의 사항을 로그(log)로 기록해놓고, 이전 상태로 되돌아간 후 실패가 발생하기 전까지의 과정을 재실행",
                answer: "REDO"
            },
            {
                question: "회복 기법 중 로그를 이용하여 오류와 관련된 내용을 취소하여 복구",
                answer: "UNDO"
            },
            {
                question: "사용자나 개발자의 관점에서 필요로 하는 데이터베이스의 논리적 구조",
                answer: "외부 스키마"
            },
            {
                question: "데이터베이스의 전체적인 논리적 구조",
                answer: "개념 스키마"
            },
            {
                question: "물리적 저장 장치의 관점에서 보는 데이터베이스 구조",
                answer: "내부 스키마"
            },
            // {
            //     question: "데이터가 정렬된 순서로 생성되는 인덱스",
            //     answer: "순서 인덱스"
            // },
            // {
            //     question: "해시 함수에 의해 직접 데이터에 키 값으로 접근하는 인덱스",
            //     answer: "해시 인덱스"
            // },
            // {
            //     question: "각 컬럼에 적은 개수 값이 저장된 경우 선택하는 인덱스",
            //     answer: "비트맵 인덱스"
            // },
            // {
            //     question: "수식이나 함수를 적용하여 만든 인덱스",
            //     answer: "함수기반 인덱스"
            // },
            // {
            //     question: "하나의 컬럼으로만 구성한 인덱스",
            //     answer: "단일 인덱스"
            // },
            // {
            //     question: "두 개 이상의 컬럼으로 구성한 인덱스",
            //     answer: "결합 인덱스(Concatenated Index)"
            // },
            // {
            //     question: "기본 키(PK) 기준으로 레코드를 묶어서 저장하는 인덱스",
            //     answer: "클러스터드 인덱스(Clutered Index)"
            // },
            {
                question: "제거할 요소를 참조하는 다른 모든 개체를 함께 제거",
                answer: "CASCADE"
            },
            {
                question: "다른 개체가 제거할 요소를 참조 중일때는 제거를 취소",
                answer: "RESTRICT"
            },
            {
                question: "DDL(Data Definition Language) 명령어 종류",
                answer: "CREATE, ALTER, DROP, TRUNCATE"
            },
            {
                question: "DML(Data Manipulation Language) 명령어 종류",
                answer: "INSERT, SELECT, UPDATE, DELETE"
            },
            {
                question: "DCL(Data Control Language) 명령어 종류",
                answer: "GRANT(사용 권한 부여), REVOKE(사용 권한 취소)"
            },
        ]
    },
    {
        chapter: 8,
        title: "서버 프로그램 구현",
        items: [
            {
                question: "작성한 코드의 빌드 및 배포를 수행하는 도구",
                answer: "빌드 도구(Ant, Maven, Gradle)"
            },
            {
                question: "코드의 작성과 디버깅, 수정 등과 같이 작업시 사용되는 도구",
                answer: "구현 도구(Eclipse, IntelliJ, VS)"
            },
            {
                question: "코드의 기능 검증과 전체의 품질을 높이기 위해 사용하는 도구",
                answer: "테스트 도구(XUnit, PMD, Sonar)"
            },
            {
                question: "산출물에 대한 버전관리를 위한 도구",
                answer: "형상 관리 도구(Git, SVN, CVS)"
            },
            {
                question: "형상 관리 도구 중 매일 개발이 완료된 파일은 약속된 위치의 공유 폴더에 복사하는 방식",
                answer: "공유 폴더 방식(RCS, SCCS)"
            },
            {
                question: "형상 관리 도구 중 중앙에 버전 관리 시스템을 항시 동작시키는 방식",
                answer: "클라이언트/서버 방식(CVS, SVN)"
            },
            {
                question: "형상 관리 도구 중 로컬 저장소와 원격 저장소로 분리되어 분산 저장하는 방식",
                answer: "분산 저장소 방식(Git)"
            },
            {
                question: "응집도(Cohension) 순서",
                answer: "기능적(Functional) ＞ 순차적(Sequential) ＞ 교환적(Communication) ＞ 절차적(Procedural) ＞ 시간적(Temporal) ＞ 논리적(Logical) ＞ 우연적(Coincidental)"
            },
            {
                question: "결합도(Coupling) 순서",
                answer: "내용(content) ＞ 공통(common) ＞ 외부(external) ＞ 제어(control) ＞ 스템프(stamp) ＞ 자료(data)"
            },
        ]
    },
    {
        chapter: 9,
        title: "소프트웨어 개발 보안 구축",
        items: [
            {
                question: "케빈 미트닉이 사용했던 공격 방법 중 하나로 TCP의 세션 관리 취약점을 이용한 공격기법",
                answer: "세션 하이재킹(Session Hijacking)"
            },
            {
                question: "공격대상에게 직접 공격을 하지 않고 데이터만 몰래 들여다보는 수동적 공격 기법",
                answer: "스니핑(Sniffing)"
            },
            {
                question: "네트워크 하드웨어 및 소프트웨어 구성의 취약점 파악을 위해 공격자가 취약점을 탐색하는 공격 도구",
                answer: "네트워크 스캐너, 스니퍼(Sniffer)"
            },
            {
                question: "사전(Dictionary) 크래킹 공격, 무차별(Brute Force) 크래킹 공격, 패스워드 하이브리드 공격, 레인보우 테이블 공격 활용",
                answer: "패스워드 크래킹(Password Cracking)"
            },
            {
                question: "침입자가 인증된 컴퓨팅 시스템인 것처럼 속여서 타깃 시스템의 정보를 빼내기 위해서 본인의 패킷 헤더를 인증된 호스트의 IP 어드레스로 위조하여 타깃에 전송하는 공격기법",
                answer: "IP 스푸핑(IP Spoofing)"
            },
            {
                question: "근거리 통신망 하에서 ARP 메시지를 이용해 상대방의 데이터 패킷을 중간에서 가로채는 중간자 공격기법",
                answer: "ARP 스푸핑(ARP SPoofing)"
            },
            {
                question: "3계층에서 스니핑 시스템을 네트워크에 존재하는 또 다른 라우터라고 알림으로써 패킷의 흐름을 바꾸는 공격기법",
                answer: "ICMP Redirect 공격"
            },
            {
                question: "악성 루틴이 숨어 있는 프로그램으로 겉보기에는 정상적인 프로그램으로 보이지만 실행하면 악성 코드를 실행하는 프로그램",
                answer: "트로이 목마(Trojan Hores)"
            },
            {
                question: "특정 타깃을 목표로 하여 다양한 수단을 통한 지속적이고 지능적인 맞춤형 공격기법. 특수목적의 조직이 하나의 표적에 대해 다양한 IT 기술을 이용하여, 지속저기으로 정보를 수집하고, 취약점을 분석하여 피해를 주는 공격기법",
                answer: "APT 공격(Advanced Persistent Threat)"
            },
            {
                question: "스스로를 복제하여 네트워크 등의 연결을 통하여 전파하는 악성 소프트웨어 컴퓨터 프로그램. 컴퓨터 바이러스와 비슷하지만, 바이러스가 다른 실행 프로그램에 기생하여 실행되는데 반해 독자적으로 실행되며 다른 실행 프로그램이 필요하지 않은 특징이 있음",
                answer: "웜(Worm)"
            },
            {
                question: "악성 코드의 한 종류로 감염된 시스템의 파일들(문서, 사진, 동영상 등)을 암호화하여 복호화할 수 없도록 하고, 피해자로 하여금 암호화된 파일을 인질처럼 잡고 몸값을 요구 악성 소프트웨어",
                answer: "랜섬웨어(Ransomeware)"
            },
            {
                question: "무선 Wifi 피싱 기법으로 공격자는 합법적인 Wifi 제공자처럼 행세하며 노트북이나 휴대 전화로 핫스팟에 연결한 무선 사용자들의 정보를 탈취하는 무선 네트워크 공격기법",
                answer: "이블 트윈(Evil Twin) 공격"
            },
            {
                question: "사람들의 심리와 행동 양식을 교묘하게 이용해서 원하는 정보를 얻는 공격 기법",
                answer: "사회공학(Social Engineering)"
            },
            {
                question: "프로세서 안에 독립적인 보안 구역을 따로 두어 중요한 정보를 보호하는 ARM사에서 개발한 보안 기술로 프로세서 안에 독립적인 보안 구역을 따로 두어 중요한 정보를 보호하는 하드웨어 기반의 보안 기술",
                answer: "트러스트존(Trustzone)"
            },
            {
                question: "네티즌들이 사이트에 접속할 때 주소를 잘못 입력하거나 철자를 빠뜨리는 실수를 이용하기 위해 이와 유사한 유명 도메인을 미리 등록하는 일로, URL 하이재킹이라고도 부름",
                answer: "타이포스쿼팅(Typosquatting)"
            },
            {
                question: "접근 통제 기법 중 자신이 누구라고 시스템에 밝히는 행위",
                answer: "식별(Identification)"
            },
            {
                question: "접근 통제 기법 중 주체의 신원을 검증하기 위한 활동",
                answer: "인증(Authentication)"
            },
            {
                question: "접근 통제 기법 중 인증된 주체에게 접근을 허용하는 활동",
                answer: "인가(Authorization)"
            },
            {
                question: "서버 접근 통제 유형 중 신분에 근거하여 객체에 대한 접근을 제한하는 방법",
                answer: "임의적 접근 통제(DAC)"
            },
            {
                question: "서버 접근 통제 유형 중 주체가 갖는 접근 허가 권한에 근거하여 객체에 대한 접근을 제한하는 방법",
                answer: "강제적 접근 통제(MAC)"
            },
            {
                question: "서버 접근 통제 유형 중 중앙 관리자가 조직 내 맡은 역할에 기초하여 자원에 대한 접근을 제한하는 방법",
                answer: "역할 기반 접근 통제(RBAC)"
            },
            {
                question: "커버로스에서 사용되는 기술로 한 번의 인증 과정으로 여러 컴퓨터상의 자원을 이용할 수 있도록 해주는 인증 기술",
                answer: "SSO(Single Sign On)"
            },
            {
                question: "1980년대 중반 MIT의 Athena 프로젝트의 일환으로 개발되었으며 클라이언트/서버 모델에서 동작하고 대칭 키 암호기법에 바탕을 둔 티켓 기반의 프로토콜",
                answer: "커버로스(Kerberos)"
            },
            {
                question: "접근 통제 보호 모델 중 미 국방부지원 보안 모델, 기밀성을 강조. No Read Up, No Write Down",
                answer: "벨-라파듈라 모델(BLP)"
            },
            {
                question: "접근 통제 보호 모델 중 무결성을 보장하는 최초 모델. No Read Down, No Write Up",
                answer: "비바(BIBA) 모델"
            },
            {
                question: "데이터의 무결성 및 기밀성 확보를 위해 정보를 쉽게 해독할 수 없는 형태로 반환하는 기법",
                answer: "암호 알고리즘(Encryption Algorithm)"
            },
            {
                question: "대칭 키 암호화 종류",
                answer: "DES, 3DES, SEED, AES, ARIA, IDEA, LFSR, Skipjack, RC4"
            },
            {
                question: "비대칭 키 암호화 종류",
                answer: "디피 헬만, RSA, ECC, ElGamal"
            },
            {
                question: "해시 암호화 종류",
                answer: "MD5, SHA-1, SHA-256/384/512, HAS-160, HAVAL"
            },
            {
                question: "1975년 IBM에서 개발하고 미국의 연방 표준국(NIST)에서 발표한 대칭 키 기반의 블록 암호화 알고리즘. 블록 크기는 64bit, 키 길이는 56bit인 페이스텔 구조, 16라운드 암호화 알고리즘",
                answer: "DES(Data Encryption Standard)"
            },
            {
                question: "1999년 국내 한국인터넷진흥원(KISA)이 개발한 블록 암호화 알고리즘",
                answer: "SEED"
            },
            {
                question: "2001년 미국 표준 기술 연구소(NIST)에서 발표한 블록 암호화 알고리즘. DES의 개인 키에 대한 전사적 공격이 가능해지고, 3 DES의 성능문제를 극복하기 위해 개발",
                answer: "AES(Advanced Encrytion Standard)"
            },
            {
                question: "2004년 국가정보원과 산학연구협회가 개발한 블록 암호화 알고리즘",
                answer: "ARIA(Academy, Research Institute Agency)"
            },
            {
                question: "스위스에서 1990년 Xuejia Lai와 James Messey가 만든 PES, IPES를 개량하여, 1991년에 제작된 블록 암호 알고리즘. 128bit의 키를 사용하여 64bit의 평문을 8라운드에 거쳐 64bit의 암호문을 만듦",
                answer: "IDEA(International Data Encryption Algorithm)"
            },
            {
                question: "시프트 레지스터의 일종으로, 레지스터에 입력되는 값이 이전 상태 값들의 선형 함수로 계산되는 구조로 되어 있는 스트림 암호화 알고리즘",
                answer: "LFSR(Linear Feedback Shift Register)"
            },
            {
                question: "미 국가안보국(NSA)에서 개발한 Clipper 칩에 내장된 블록 알고리즘. 전화기와 같이 음성을 암호화하는 데 주로 사용되고 64비트의 입출력, 80비트의 키, 32라운드를 가짐",
                answer: "Skipjack"
            },
            {
                question: "각종 재해, 장애, 재난으로부터 위기관리를 기반으로 재해복구, 업무복구 및 재개, 비상계획 등을 통해 비즈니스 연속성을 보장하는 체계",
                answer: "비즈니스 연속성 계획(BCP; Business Continuity Plan)"
            },
            {
                question: "APT 공격에서 주로 쓰이는 공격으로, 공격 대상이 방문할 가능성이 있는 합법적인 웹 사이트를 미리 감염시킨 뒤, 잠복하고 있다가 공격 대상이 방문하면 대상의 컴퓨터에 악성코드를 설치하는 방식",
                answer: "워터링홀(Watering Hole)"
            },
            {
                question: "기업 내부, 외부 간 트래픽을 모니터링하여 시스템의 접근을 허용/차단하는 시스템",
                answer: "방화벽(Firewall)"
            },
            {
                question: "웹 애플리케이션 보안에 특화된 보안 장비로, SQL 인젝션, XSS 등과 같은 웹 공격을 탐지하고 차단하는 기능",
                answer: "웹 방화벽(WAF; Web Application Firewall)"
            },
            {
                question: "단말기가 내부 네트워크에 접속을 시도할 때 이를 제어하고 통제하는 기능을 제공하는 솔루션",
                answer: "네트워크 접근 제어(NAC; Network Access Control)"
            },
            {
                question: "네트워크에 발생하는 이벤트를 모니터링하고, 보안정책 위반 행위를 실시간으로 탐지하는 시스템",
                answer: "침입 탐지 시스템(IDS; Intrusion Detection System)"
            },
            {
                question: "네트워크에 대한 공격이나 침입을 실시간적으로 차단하고, 유해트래픽에 대해 능동적으로 조치하는 시스템",
                answer: "침입 방지 시스템(IPS; Intrusion Prevention System)"
            },
            {
                question: "무선 단말기의 접속을 자동 탐지 및 차단하고 보안에 취약한 무선 공유기를 탐지하는 시스템",
                answer: "무선 침입 방지 시스템(WIPS; Wireless Intrusion Prevention System)"
            },
            {
                question: "다양한 보안 장비의 기능을 하나의 장비로 통합하여 제공하는 시스템",
                answer: "통합 보안 시스템(UTM; Unified Threat Management)"
            },
            {
                question: "인터넷을 통해 디바이스 간에 사설 네트워크 연결을 생성하며, 퍼블릭 네트워크를 통해 데이터를 안전하게 익명으로 전송하는 데 사용하는 기술로, 인터넷과 같은 공중망에 인증, 암호화, 터널링 기술을 활용해 마치 전용망을 사용하는 효과를 가지는 보안 솔루션 공중망과 사설망의 중간단계이며 방식으로는 SSL 방식과 IPSec 방식이 있음",
                answer: "가상 사설망(VPN; Virtual Private Network)"
            },
            {
                question: "머신러닝 기술을 이용하여 IT 시스템에서 발생하는 대량의 로그를 통합관리 및 분석하여 사전에 위협에 대응하는 보안 관제 솔루션",
                answer: "SIEM(Security Information and Event Management)"
            },
            {
                question: "방화벽, 침입 탐지 시스템, UTM, 가상 사설망 등의 여러 보안 시스템으로부터 발생한 각종 이벤트 및 로그를 통합해서 관리, 분석 대응하는 전사적 통합 보안 관리 시스템",
                answer: "ESM(Enterprise Security Management)"
            },
            {
                question: "조직의 주요 정보자산을 보호하기 위하여 정보보호 관리 절차와 과정을 체계적으로 수립하여 지속적으로 관리하고 운영하기 위한 종합적인 체계 → 정보보호관리체계",
                answer: "ISMS(Information Security Management System)"
            },
            {
                question: "기업이 개인정보보호 활동을 체계적, 지속적으로 수행하기 위해 필요한 보호조치 체계를 구축했는지 여부를 점검, 평가하여 기업에게 부여하는 인증제도",
                answer: "PIMS(Personal Information Management System)"
            },
            {
                question: "임시 키 무결성 프로토콜",
                answer: "TKIP(Temporal Key Integrity Protocol)"
            },
        ]
    },
    {
        chapter: 10,
        title: "애플리케이션 테스트 관리",
        items: [
            {
                question: "내부 구조와 동작을 검사하는 소프트웨어 테스트. 구조 기반 테스트, 코드 기반 테스트, 로직 기반 테스트",
                answer: "화이트박스 테스트"
            },
            {
                question: "프로그램 내의 모든 명령문을 적어도 한 번 수행하는 커버리지",
                answer: "구문 커버리지(Statement Coverage)"
            },
            {
                question: "전체 조건식이 적어도 한 번은 참과 거짓의 결과를 수행하는 테스트 커버리지",
                answer: "결정 커버리지(Decision Coverage)"
            },
            {
                question: "각 개별 조건식이 적어도 한 번은 참과 거짓의 결과를 수행하는 테스트 커버리지",
                answer: "조건 커버리지(Condition Coverage)"
            },
            {
                question: "수행 가능한 모든 경로를 테스트하는 기법",
                answer: "기본 경로 커버리지(Base Path Coverage)"
            },
            {
                question: "제어 구조를 그래프 형태로 나타내어 내부 로직을 테스트하는 기법",
                answer: "제어 흐름 테스트(Control Flow Testing)"
            },
            {
                question: "제어 흐름 그래프에 데이터 사용현황을 추가한 그래프를 통해 테스트하는 기법",
                answer: "데이터 흐름 테스트(Data Flow Testing)"
            },
            {
                question: "반복(Loop) 구조에 초점을 맞춰 실시하는 테스트 기법",
                answer: "루프 테스트(Loop Testing)"
            },
            {
                question: "외부 사용자의 요구사항 명세를 보면서 수행하는 테스트. 기능 테스트, 명세 테스트, 경험 기반 테스트",
                answer: "블랙박스 테스트"
            },
            {
                question: "입력 데이터를 동등한 부분으로 나누고, 각 부분에서 대표적인 값들을 선택하여 테스트 케이스를 생성하는 기법",
                answer: "동등분할 테스트(Equivalence Partitioning Testing)"
            },
            {
                question: "동치 분할 기법을 보완한 기법으로 입력 조건의 경계값일 때 오류가 발생하기 쉬우므로 입력 데이터의 경계값들을 테스트하는 기법",
                answer: "경계값 분석 테스트(Boundary Value Analysis Testing)"
            },
            {
                question: "요구사항의 논리와 발생조건을 테이블 형태로 나열하여 조건과 행위를 모두 조합하여 테스트하는 기법",
                answer: "결정 테이블 테스트(Decision Table Testing)"
            },
            {
                question: "테스트 대상/시스템이나 객체의 상태를 구분하고, 이벤트에 의해 어느 한 상태에서 다른 상태로 전이되는 경우의 수를 수행하는 테스트 기법",
                answer: "상태 전이 테스트(State Transition Testing)"
            },
            {
                question: "시스템이 실제 사용되는 유스케이스로 모델링 되어 있을 때 프로세스의 흐름을 기반으로 테스트 케이스를 명세화하여 수행하는 테스트 기법",
                answer: "유스케이스 테스트(Use Case Testing)"
            },
            {
                question: "SW의 일부 또는 전체를 트리 구조로 분석 및 표현하여 테스트 케이스를 설계하여 테스트하는 기법",
                answer: "분류 트리 테스트(Classification Tree Method Testing)"
            },
            {
                question: "테스트 데이터값들 간에 최소한 한 번씩을 조합하는 방식이며, 이는 커버해야 할 기능적 범위를 모든 조합에 비해 상대적으로 적은 양의 테스트 세트를 구성하기 위한 테스트 기법",
                answer: "페어와이즈 테스트(Pairwise Testing)"
            },
            {
                question: "그래프를 활용하여 입력 데이터 간의 관계 및 출력에 미치는 영향을 분석하여 효용성이 높은 테스트 케이스를 선정하여 테스트하는 기법",
                answer: "원인-결과 그래프 테스트(Cause-Effect Graph Testing)"
            },
            {
                question: "여러 버전의 프로그램에 같은 입력값을 넣어 동일한 결과 데이터가 나오는지 비교해 보는 테스트 기법",
                answer: "비교 테스트(Comparison Testing)"
            },
            {
                question: "개발자가 범할 수 있는 실수를 추정하고 이에 따른 결함이 검출되도록 테스트 케이스를 설계하여 테스트하는 기법",
                answer: "오류 추정 테스트(Error Guessing Testing)"
            },
            {
                question: "시스템에 고의로 실패를 유도하고, 시스템의 정상적 복귀 여부를 테스트",
                answer: "회복 테스트(Recovery Testing)"
            },
            {
                question: "불법적인 소프트웨어가 접근하여 시스템을 파괴하지 못하도록 소스 코드 내의 보안적인 결함을 미리 점검하는 테스트",
                answer: "안전 테스트(Security Testing)"
            },
            {
                question: "사용자의 이벤트에 시스템이 응답하는 시간, 특정 시간 내에 처리하는 업무량, 사용자 요구에 시스템이 반응하는 속도 등을 측정하는 테스트",
                answer: "성능 테스트(Performance Testing)"
            },
            {
                question: "시스템의 내부 논리 경로, 소스 코드의 복잡도를 평가하는 테스트",
                answer: "구조 테스트(Structure Testing)"
            },
            {
                question: "회귀 테스트는 오류를 제거하거나 수정한 시스템에서 오류 제거와 수정에 의해 새로이 유입된 오류가 없는지 확인하는 일종의 반복 테스트",
                answer: "회귀 테스트(Regression Testing)"
            },
            {
                question: "변경된 시스템과 기존 시스템에 동일한 데이터 입력 후 결과를 비교하는 테스트",
                answer: "병행 테스트(Parallel Testing)"
            },
            {
                question: "자료 구조 테스트, 실행 경로 테스트, 오류 처리 테스트, 인터페이스 테스트",
                answer: "단위 테스트"
            },
            {
                question: "애플리케이션 통합 테스트는 소프트웨어 각 모듈 간의 인터페이스 관련 오류 및 결함을 찾아내기 위한 체계적인 테스트 기법. 빅뱅 테스트, 샌드위치 테스트, 상향식 테스트, 하향식 테스트",
                answer: "통합 테스트"
            },
            {
                question: "기능/비기능 요구사항 테스트",
                answer: "시스템 테스트"
            },
            {
                question: "최종 사용자와 업무의 이해관계자 등이 테스트를 수행함으로써 개발된 제품에 대해 운영 여부를 결정하는 테스트. 계약 인수, 규정 인수, 사용자 인수, 운영상의 인수, 알파/베타 테스트",
                answer: "인수 테스트"
            },
            {
                question: "새로운 제품 개발 과정에서 이루어지는 첫 번째 테스트로 선택된 사용자가 개발자와 함께 수행하는 테스트(개발자 관점)",
                answer: "알파 테스트"
            },
            {
                question: "상용화하기 전에 실제 환경에서 일정 수의 사용자에게 대상 소프트웨어를 사용하게 하고 피드백을 받는 테스트(고객 관점)",
                answer: "베타 테스트"
            },
            {
                question: "모듈 테스트 수행 후의 결과를 도출하는 시험용 모듈. 하위 모듈을 호출하는 상위 모듈의 역할. 상향식 테스트",
                answer: "테스트 드라이버"
            },
            {
                question: "일시적으로 필요한 조건만을 가지고 임시로 제공되는 시험용 모듈. 상위 모듈에 의해 호출되는 하위 모듈의 역할. 하향식 테스트",
                answer: "테스트 스텁"
            },
        ]
    },
    {
        chapter: 11,
        title: "응용 SW 기초 기술 활용",
        items: [
            {
                question: "컴퓨터 시스템의 자원들을 효율적으로 관리하며, 사용자가 컴퓨터를 편리하고 효율적으로 사용할 수 있도록 환경을 제공하는 여러 프로그램의 모임",
                answer: "운영체제(OS; Operating System)"
            },
            {
                question: "1960년대 AT&T 벨(Bell) 연구소, MIT, General Electric이 공동 개발한 운영체제. 시분할 시스템을 위해 설계된 대화식 운영체제. 대부분 C 언어로 작성되어 있어 이식성이 높으며 장치, 프로세스 간의 호환성이 높다. 트리(Tree) 구조의 파일 시스템을 갖는다.",
                answer: "UNIX"
            },
            {
                question: "UNIX의 가장 핵심적인 부분으로 하드웨어를 보호하고, 프로그램과 하드웨어 간의 인터페이스 역할을 담당. 프로세스(CPU 스케줄링) 관리, 기억장치 관리, 파일 관리, 입출력 관리, 프로세스간 통신, 데이터 전송 및 변환 등 여러가지 기능을 수행",
                answer: "커널(Kernel)"
            },
            {
                question: "사용자의 명령어를 인식하여 프로그램을 호출하고 명령을 수행하는 명령어 해석기. 시스템과 사용자 간의 인터페이스를 담당",
                answer: "쉘(Shell)"
            },
            {
                question: "구글(Google) 사에서 개발한 리눅스 커널 기반의 개방형 모바일 운영체제. 자바와 코틀린으로 애플리케이션을 작성",
                answer: "Android"
            },
            {
                question: "프로그램이나 데이터를 주기억장치의 어디에 위치시킬 것인지를 결정하는 전략",
                answer: "배치(Placement) 전략"
            },
            {
                question: "프로그램이나 데이터가 들어갈 수 있는 크기의 빈 영역 중에서 첫 번째 분할 영역에 배치시키는 방법",
                answer: "최초 적합(First Fit)"
            },
            {
                question: "프로그램이나 데이터가 들어갈 수 있는 크기의 빈 영역 중에서 단편화를 가장 작게 남기는 분할 영역에 배치시키는 방법",
                answer: "최적 적합(Best Fit)"
            },
            {
                question: "프로그램이나 데이터가 들어갈 수 있는 크기의 빈 영역 중에서 단편화를 가장 많이 남기는 분할 영역에 배치시키는 방법",
                answer: "최악 적합(Worst Fit)"
            },
            {
                question: "가상기억장치에 보관되어 있는 프로그램과 주기억 장치의 영역을 동일한 크기로 나눈 후 나눠진 프로그램을 동일하게 나눠진 주기억장치의 영역에 적재시켜 실행하는 기법",
                answer: "페이징(Paging) 기법"
            },
            {
                question: "가상기억장치에 보관되어 있는 프로그램을 다양한 크기의 논리적인 단위로 나눈 후 주기억장치에 적재시켜 실행시키는 기법",
                answer: "세그먼테이션(Segmentation) 기법"
            },
            {
                question: "가장 먼저 들어와서 가장 오래 있었던 페이지를 교체하는 기법(선입선출)",
                answer: "FIFO(First in First Out)"
            },
            {
                question: "최근에 가장 오랫동안 사용하지 않은 페이지를 교체하는 기법",
                answer: "LRU(Least Recently Used)"
            },
            {
                question: "사용 빈도가 가장 적은 페이지를 교체하는 기법",
                answer: "LFU(Least Frequently Used)"
            },
            {
                question: "CPU를 사용하려고 하는 프로세스들 사이의 우선순위를 관리하는 작업",
                answer: "프로세스 스케줄링"
            },
            {
                question: "하나의 프로세스가 CPU를 차지하고 있을 때, 우선순위가 높은 다른 프로세스가 현재 프로세스를 중단시키고 CPU를 점유하는 스케줄링 방식",
                answer: "선점형 스케줄링"
            },
            {
                question: "한 프로세스가 CPU를 할당받으면 작업 종료 후 CPU 반환 시까지 다른 프로세스는 CPU 점유가 불가능한 스케줄링 방식",
                answer: "비선점형 스케줄링"
            },
            {
                question: "먼저 들어온 순서대로 일정 시간만큼만 처리하는 선점형 스케줄링",
                answer: "RR(Round Robin)"
            },
            {
                question: "남은 시간이 짧은 프로세스부터 처리하는 선점형 스케줄링",
                answer: "SRT(Shortest Remaining Time)"
            },
            {
                question: "우선순위별로 큐를 분리하여 다양한 스케줄링 적용하는 선점형 스케줄링",
                answer: "MLQ(Multi Level Queue)"
            },
            {
                question: "먼저 들어온 프로세스 먼저 처리하는 비선점형 스케줄링",
                answer: "FCFS(First Come First Served)"
            },
            {
                question: "처리시간이 짧은 프로세스부터 처리하는 비선점형 스케줄링",
                answer: "SJF(Shortest Job First)"
            },
            {
                question: "짧은 작업시간이면서 대기시간이 긴 프로세스부터 처리하는 비선점형 스케줄링",
                answer: "HRN(Highest Response-ratio Next)"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 파일 내용을 화면에 표시",
                answer: "cat"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 디렉터리의 위치를 변경",
                answer: "cd"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 파일 소유자와 그룹을 변경",
                answer: "chown"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 파일을 복사",
                answer: "cp"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 파일을 삭제",
                answer: "rm"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 파일을 찾음",
                answer: "find"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 PID(프로세스 고유 번호)를 이용하여 프로세스를 종료",
                answer: "kill"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 새로운 프로세스를 생성",
                answer: "fork"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 현재 디렉터리의 파일 목록을 표시",
                answer: "ls"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 디렉터리를 생성",
                answer: "mkdir"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 디렉터리를 삭제",
                answer: "rmdir"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 파일을 이동",
                answer: "mv"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 현재 실행중인 프로세스를 표시",
                answer: "ps"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 현재 작업중인 디렉터리 경로를 화면에 표시",
                answer: "pwd"
            },
            {
                question: "UNIX/LINUX 기본 명령어 중 현재 시스템에 접속해 있는 사용자를 표시",
                answer: "who"
            },
            {
                question: "파일의 보호 모드를 설정하여 파일의 사용 허가를 지정하는 UNIX 명령어",
                answer: "chmod"
            },
            {
                question: "인터넷에 연결된 모든 컴퓨터 자원을 구분하기 위한 고유한 주소",
                answer: "IP(Internet Protocol Address)"
            },
            {
                question: "8비트씩 4부분, 총 32비트로 구성. 네트워크 부분의 길이에 따라 A 클래스에서 E 클래스까지 총 5단계로 구성",
                answer: "IPv4(Internet Protocol version 4)"
            },
            {
                question: "현재 사용하고 있는 IP 주소 체계인 IPv4의 주소 부족 문제를 해결하기 위해 개발. 16비트씩 8부분, 총 128비트로 구성. 각 부분을 16진수로 표현. 인증성, 기밀성, 데이터 무결성의 지원으로 보안 문제 해결",
                answer: "IPv6(Internet Protocol version 6)"
            },
            {
                question: "전송에 필요한 두 장치 간의 실제 접속과 절단 등 기계적, 전기적, 기능적, 절차적 특성에 대한 규칙을 정의",
                answer: "물리 계층(Physical Layer)"
            },
            {
                question: "두 개의 인접한 개방 시스템들 간에 신뢰성 있고 효율적인 정보 전송을 할 수 있도록 시스템 간 연결 설정과 유지 및 종료를 담당",
                answer: "데이터 링크 계층(Data Link Layer)"
            },
            {
                question: "개방 시스템들 간의 네트워크 연결을 관리하는 기능과 데이터의 교환 및 중계 기능",
                answer: "네트워크 계층(Network Layer)"
            },
            {
                question: "논리적 안정과 균일한 데이터 전송 서비스를 제공함으로써 종단 시스템(End-to-End) 간에 투명한 데이터 전송을 가능하게 한다.",
                answer: "전송 계층(Transport Layer)"
            },
            {
                question: "송수신 측 간의 관련성을 유지하고 대화 제어를 담당",
                answer: "세션 계층(Session Layer)"
            },
            {
                question: "서로 다른 데이터 표현 형태를 갖는 시스템 간의 상호 접속을 위해 필요한 계층으로, 코드 변환, 데이터 암호화, 데이터 압축, 구문 검색 등의 기능 수행",
                answer: "표현 계층(Presentation Layer)"
            },
            {
                question: "사용자(응용 프로그램)가 OSI 환경에 접근할 수 있도록 서비스를 제공",
                answer: "응용 계층(Application Layer)"
            },
            {
                question: "브리지와 같이 LAN과 LAN의 연결 기능에 데이터 전송의 최적 경로를 선택하는 기능이 추가된 장치이다. 서로 다른 LAN 또는 LAN과 WAN을 연결하는 기능",
                answer: "라우터(Router)"
            },
            {
                question: "거리가 증가할수록 감쇠하는 디지털 신호의 장거리 전송을 위해 수신한 신호를 재생시키거나 출력 전압을 높여 전송하는 장치",
                answer: "리피터(Repeater)"
            },
            {
                question: "한 사무실이나 가까운 거리의 컴퓨터들을 연결하는 장치로, 각각의 회선을 통합하여 관리. 신호 증폭 기능을 하는 리피터의 역할을 포함",
                answer: "허브(Hub)"
            },
            {
                question: "LAN과 LAN을 연결하거나 LAN 안에서의 컴퓨터 그룹을 연결하는 장치. 브리지를 이용한 서브넷(Subnet) 구성 시 전송 가능한 회선 수는 브리지가 n개 일 때, n(n-1)/2개이다.",
                answer: "브리지(Bridge)"
            },
            {
                question: "OSI 전 계층의 프로토콜 구조가 다른 네트워크를 연결하는 장치. LAN에서 다른 네트워크에 데이터를 보내거나 다른 네트워크로부터 데이터를 받아들이는 출입구 역할",
                answer: "게이트웨이(Gateway)"
            },
            {
                question: "프로토콜의 기본요소 3가지",
                answer: "구문(Syntax), 의미(Semantics), 시간(Timing)"
            },
            {
                question: "OSI 7계층 중 응용 계층 설명",
                answer: "사용자와 네트워크 간 응용서비스 연결, 데이터 생성. HTTP, FTP"
            },
            {
                question: "OSI 7계층 중 표현 계층 설명",
                answer: "데이터 형식 설정, 부호교환, 암/복호화, 압축. JPEG, MPEG"
            },
            {
                question: "OSI 7계층 중 세션 계층 설명",
                answer: "송수신 간의 논리적인 연결, 연결 접속, 동기제어. RPC, NetBIOS"
            },
            {
                question: "OSI 7계층 중 전송 계층 설명",
                answer: "송수신 프로세스 간의 연결, 신뢰성 있는 통신 보장. TCP, UDP"
            },
            {
                question: "OSI 7계층 중 네트워크 계층 설명",
                answer: "단말기 간 데이터 전송을 위한 최적화된 경로 제공. IP, ICMP"
            },
            {
                question: "OSI 7계층 중 데이터링크 계층 설명",
                answer: "인접 시스템 간 데이터 전송, 전송 오류 제어. HDLC, PPP"
            },
            {
                question: "OSI 7계층 중 물리 계층 설명",
                answer: "0과 1의 비트 정보를 회선에 보내기 위한 전기적 신호 변환. RS-232C"
            },
            {
                question: "프로토콜은 서로 다른 시스템이나 기기들 간의 데이터 교환을 원활히 하기 위한 표준화된 통신규약. 기본 3요소에는 구문, 의미, 타이밍이 있다.",
                answer: "프로토콜(Protocol)"
            },
            {
                question: "점대점 방식이나 다중방식의 통신에 사용되는 ISO에서 표준화한 동기식 비트 중심의 데이터 링크 프로토콜",
                answer: "HDLC(High-level Data Link Control)"
            },
            {
                question: "네트워크 분야에서 두 통신 노드 간의 직접적인 연결을 위해 일반적으로 사용되는 데이터 링크 프로토콜",
                answer: "PPP(Point-to-Point Protocol)"
            },
            {
                question: "프로토콜 처리를 간략화하여 단순히 데이터 프레임들의 중계(Relay)기능과 다중화 기능만 수행함으로 데이터 처리속도의 향상 및 전송지연을 감소시킨 고속의 데이터 전송 기술",
                answer: "프레임 릴레이(Frame Relay)"
            },
            {
                question: "정보전달의 기본단위를 53바이트 셀 단위로 전달하는 비동기식 시분할 다중화 방식의 패킷형 전송 기술",
                answer: "ATM(Asynchronous Transfer Mode)"
            },
            {
                question: "데이터 전송 과정에서 발생한 오류를 검출하여 검출된 오류를 재전송 요구 없이 스스로 수정하는 방식",
                answer: "전진 오류 수정(FEC; Forward Error Correction)"
            },
            {
                question: "데이터 전송 시 Nbit의 검사 비트를 추가해 오류를 검출하고 수정까지 할 수 있는 방법",
                answer: "해밍 코드 방식"
            },
            {
                question: "여러 개 비트의 오류가 있더라도 한곗값, 순차적 디코딩을 이용해 모두 수정할 수 있는 방법",
                answer: "상승 코드 방식"
            },
            {
                question: "데이터 전송 과정에서 오류가 발생하면 송신 측에 재전송을 요구하는 방식으로, 오류 제어는 자동반복 요청(ARQ)에 의해 이루어짐",
                answer: "후진 오류 수정(BEC; Backward Error Correction)"
            },
            {
                question: "전송 데이터의 한 블록 끝에 1bit의 패리티 비트 추가함으로 오류를 검출하는 방법",
                answer: "패리티 검사"
            },
            {
                question: "송신측과 수신측이 동일한 특정 다항식을 사용하여 오류를 검출하는 방법",
                answer: "CRC"
            },
            {
                question: "프레임의 모든 문자로부터 계산되는 잉여 패리티 비트들을 사용하는 이차원 패리티 검사 방식",
                answer: "블록합 검사"
            },
            {
                question: "비트 위주의 프로토콜로 각 프레임에 데이터 흐름을 제어하고 오류를 보정할 수 있는 비트 열을 삽입하여 전송",
                answer: "HDLC(High-level Data Link Control)"
            },
            {
                question: "서로 다른 기종의 컴퓨터들이 데이터를 주고받을 수 있도록 하는 표준 프로토콜",
                answer: "TCP/IP(Transmission Control Protocol/Internet Protocol)"
            },
            {
                question: "가상 회선 방식을 기반으로 하는 양방향 연결 서비스를 제공. 패킷의 다중화, 순서 제어, 오류 제어, 흐름 제어 기능 제공",
                answer: "TCP"
            },
            {
                question: "데이터그램 방식을 기반으로 하는 비연결형 서비스 제공. 패킷의 분해/조립, 주소 지정, 경로 선택 기능을 제공",
                answer: "IP"
            },
            {
                question: "PPTP와 L2F의 기술적 장점들을 결합하여 만들어진 터널링 프로토콜.데이터 링크 계층에서 구현되는 터널링 프로토콜. 자체적으로 암호화 및 인증 기능을 제공하지 않아 다른 보안 프로토콜과 함께 사용되는 경우가 많다.",
                answer: "L2TP(Layer 2 Tunneling Protocol)"
            },
            {
                question: "데이터 전송 전에 연결을 설정하지 않는 비연결형 서비스를 제공하는 프로토콜. 실시간 전송에 유리하며, 신뢰성보다는 속도가 중요시되는 네트워크에 사용",
                answer: "UDP(User Datagram Protocol)"
            },
            {
                question: "송수신 간의 패킷 단위로 데이터를 교환하는 네트워크에서 정보를 주고받는데 사용하는 통신 프로토콜",
                answer: "IP(Internet Protocol)"
            },
            {
                question: "IP 네트워크상에서 IP 주소를 MAC 주소(물리적 주소)로 변환하는 프로토콜",
                answer: "ARP(Address Resolution Protocol)"
            },
            {
                question: "IP 호스트가 자신의 물리 네트워크 주소(MAC)는 알지만 IP 주소를 모르는 경우, 서버로부터 IP 주소를 요청하기 위해 사용하는 프로토콜",
                answer: "RARP(Reverse Address Resolution Protocol)"
            },
            {
                question: "메시지 형식은 8바이트의 헤더와 가변 길이의 데이터 영역으로 분리되고, IP의 동작 과정에서의 전송 오류가 발생하는 경우에 오류 정보를 전송하는 목적으로 사용하는 프로토콜",
                answer: "ICMP(Internet Control Message Protocol)"
            },
            {
                question: "인터넷 그룹 관리 프로토콜은 호스트 컴퓨터와 인접 라우터가 멀티캐스트 그룹 멤버십을 구성하는 데 사용하는 통신 프로토콜",
                answer: "IGMP(Internet Group Management Protocol)"
            },
            {
                question: "데이터 전송을 위해 목적지까지 갈 수 있는 여러 경로 중 최적의 경로를 설정해주는 라우터 간의 상호 통신 프로토콜",
                answer: "라우팅 프로토콜(Routing Protocol)"
            },
            {
                question: "ping 명령어를 통한 패킷을 연속적으로 계속 보내어 서버의 요청에 응답으로 인한 다른 작업을 하지 못하도록 하는 공격",
                answer: "ICMP Flooding"
            },
            {
                question: "인터넷에서 사용되는 패킷 교환 네트워크상에서 데이터를 교환하기 위한 32비트 주소체계를 갖는 네트워크 계층의 프로토콜",
                answer: "IPv4"
            },
            {
                question: "IP 주소 고갈문제를 해결하기 위해 원본 네트워크를 여러 개의 네트워크로 분리하는 과정. 대표 네트워크 IP 주소일 경우 호스트 ID는 2진수 기준으로 모두 0을 채워넣고, 브로드캐스트 ID는 2진수 기준으로 모두 1을 채워넣음",
                answer: "서브네팅(Subnetting)"
            },
            {
                question: "서브넷의 길이를 고정적으로 사용. 한 대역을 동일한 크기로 나누는 방식",
                answer: "FLSM(Fixed-Length Subnet Masking)"
            },
            {
                question: "서브넷의 길이를 가변적으로 사용. 한 대역을 다양한 크기로 나누는 방식",
                answer: "VLSM(Variable Length Subnet Masking)"
            },
            {
                question: "한 개의 정식 IP 주소에 대량의 가상 사설 IP 주소를 할당 및 연결하는 기능",
                answer: "NAT(Network Address Translation)"
            },
            {
                question: "동일한 AS 내의 라우팅에 사용되는 프로토콜",
                answer: "내부 라우팅 프로토콜(IGP; Interior Gateway Protocol)"
            },
            {
                question: "AS(자율시스템)내에서 사용하는 거리 벡터 알고리즘에 기초하여 개발된 내부 라우팅 프로토콜",
                answer: "RIP(Routing Information Protocol)"
            },
            {
                question: "규모가 크고 복잡한 TCP/IP 네트워크에서 RIP의 단점을 개선하기 위해 자신을 기준으로 링크 상태 알고리즘을 적용하여 최단 경로를 찾는 라우팅 프로토콜",
                answer: "OSPF(Open Shortest Path First)"
            },
            {
                question: "서로 다른 AS 간 라우팅 프로토콜로 게이트웨이 간의 라우팅에 사용되는 프로토콜",
                answer: "외부 라우팅 프로토콜(EGP; Exterior Gateway Protocol)"
            },
            {
                question: "AS 상호 간에 경로 정보를 교환하는데 사용되는 외부 라우팅 프로토콜",
                answer: "BGP(Border Gateway Protocol)"
            },
            {
                question: "메시지를 일정한 길이의 패킷으로 잘라서 전송하는 방식으로, 가상 회선 방식과 데이터그램 방식이 있다.",
                answer: "패킷 교환 방식(Packet Switching)"
            },
            {
                question: "각 전송 패킷을 미리 정해진 경로없이 독립적으로 처리하여 교환하는 방식이다.특정 교환기의 고장 시 모든 패킷을 잃어버리는 가상회선과 달리, 그 경로를 피해서 전송할 수 있으므로 더욱 신뢰가 가능하다.",
                answer: "데이터그램(Datagram)"
            },
            {
                question: "회선교환 방식과 데이터그램 방식의 장점을 결합한 통신 기술로, 목적지 호스트와 미리 연결한 후, 통신하는 연결형 교환 방식이다. 통신 기술에는 ATM이 있으며, 정해진 시간 안이나 다량의 데이터를 연속으로 보낼 때 적합하다.",
                answer: "가상 회선(Virtual Circuit)"
            },
            {
                question: "하나의 대형 저장 장치 대신 다수의 저용량의 저장 장치를 배열로 구성하는 기술. 여러 개의 하드 디스크에 일부 중복된 데이터를 나눠서 저장하기 때문에 디스크 어레이라고도 한다.",
                answer: "RAID(Redundant Array of Independent Disks)"
            },
            {
                question: "오픈 소스를 기반으로 한 분산 컴퓨팅 플랫폼. 더그 커팅과 마이크 캐퍼렐라가 개발했으며, 구글의 맵리듀스 엔진을 사용하고 있다. 일반 PC급 컴퓨터들로 가상화된 대형 스토리지를 형성하고 그 안에 보관된 거대한 데이터 세트를 병렬로 처리할 수 있도록 개발된 자바 소프트웨어 프레임워크이다.",
                answer: "하둡(Hadoop)"
            },
            {
                question: "대용량 데이터를 분산 처리하기 위한 목적으로 개발된 프로그래밍 모델이다. 흩어져 있는 데이터를 연관성 있는 데이터 분류로 묶는 Map 작업을 수행한 후 중복 데이터를 제거하고 원하는 데이터를 추출하는 Reduce 작업을 수행한다.",
                answer: "맵리듀스(MapReduce)"
            },
            {
                question: "대량의 데이터를 분석하여 데이터에 내재된 변수 사이의 상호관계를 규명하여 일정한 패턴을 찾아내는 기법",
                answer: "데이터 마이닝(Data Mining)"
            },
            {
                question: "오픈 소스 기반 분산 컴퓨팅 플랫폼인 아파치 하둡(Apache Hadoop) 기반의 분산 데이터 웨어하우스 프로젝트",
                answer: "타조(Tajo)"
            },
            {
                question: "다차원으로 이루어진 데이터로부터 통계적인 요약 정보를 분석하여 의사결정에 활용하는 방식. 연산 : Roll-up, Drill-down, Drill-through, Drillacross, Pivoting, Slicing, Dicing",
                answer: "OLAP(Online Analytical Processing)"
            },
            {
                question: "다양한 채널에서 소비자와 상호 작용을 통해 생성된 것으로, 기업 마케팅에 있어 효율적이고 다양한 데이터이며, 이전에 사용하지 않거나 알지 못했던 새로운 데이터나 기존 데이터에 새로운 가치가 더해진 데이터",
                answer: "브로드 데이터(Broad Data)"
            },
        ]
    },
    {
        chapter: 12,
        title: "제품 소프트웨어 패키징",
        items: [
            // {
            //     question: "소프트웨어 개발 과정에서 정리된 릴리즈 정보를 최종 사용자인 고객과 공유하기 위한 문서",
            //     answer: "릴리즈 노트"
            // },
            // {
            //     question: "저작권에 대한 사용 권한, 라이선스 발급, 암호화된 키 관리, 사용량에 따른 결제 관리 등을 수행하는 곳",
            //     answer: "클리어링 하우스(Clearing House)"
            // },
            // {
            //     question: "콘텐츠를 제공하는 저작권자",
            //     answer: "콘텐츠 제공자(Contents Provider)"
            // },
            // {
            //     question: "콘텐츠를 메타 데이터와 함께 배포 가능한 형태로 묶어 암호화하는 프로그램",
            //     answer: "패키저(Packager)"
            // },
            // {
            //     question: "암호화된 콘텐츠를 유통하는 곳이나 사람",
            //     answer: "콘텐츠 분배자(Contents Distributor)"
            // },
            // {
            //     question: "배포된 콘텐츠의 이용 권한을 통제하는 프로그램",
            //     answer: "DRM 컨트롤러(DRM Controller)"
            // },
            // {
            //     question: "콘텐츠 원본을 안전하게 유통하기 위한 전자적 보안 장치",
            //     answer: "보안 컨테이너(Security Container)"
            // },
            // {
            //     question: "콘텐츠 및 라이선스를 암호화하고 전자 서명을 할 수 있는 기술",
            //     answer: "암호화(Encryption)"
            // },
            // {
            //     question: "콘텐츠를 암호화한 키에 대한 저장 및 분배 기술",
            //     answer: "키 관리(Key Management)"
            // },
            // {
            //     question: "콘텐츠를 암호화된 콘텐츠로 생성하기 위한 기술",
            //     answer: "암호화 파일 생성(Packager)"
            // },
            // {
            //     question: "콘텐츠에 대한 식별 체계 표현 기술",
            //     answer: "식별 기술(Identification)"
            // },
            // {
            //     question: "라이선스의 내용 표현 기술",
            //     answer: "저작권 표현(Right Expression)"
            // },
            // {
            //     question: "라이선스 발급 및 사용에 대한 정책 표현 및 관리 기술",
            //     answer: "정책 관리(Policy Management)"
            // },
            // {
            //     question: "크랙에 의한 콘텐츠 사용 방지 기술",
            //     answer: "크랙 방지(Tamper Resistance)"
            // },
            // {
            //     question: "라이선스 발급 및 사용의 기준이 되는 사용자 인증 기술",
            //     answer: "인증(Authentication)"
            // },
            // {
            //     question: "개발 과정에서 소프트웨어의 변경 사항을 관리하기 위해 개발된 일련의 활동",
            //     answer: "형상 관리(SCM; Software Configuration Management)"
            // },
            // {
            //     question: "형상 관리 대상에 이름과 관리 번호를 부여하고, 계층(Tree) 구조로 구분하여 수정 및 추적이 용이하도록 하는 작업",
            //     answer: "형상 식별"
            // },
            // {
            //     question: "소프트웨어 업그레이드나 유지 보수 과정에서 생성된 다른 버전의 형상 항목을 관리하고, 이를 위해 특정 절차와 도구(Tool)를 결합시키는 작업",
            //     answer: "버전 제어"
            // },
            // {
            //     question: "식별된 형상 항목에 대한 변경 요구를 검토하여 현재의 기준선(Base Line)이 잘 반영될 수 있도록 조정하는 작업",
            //     answer: "형상 통제"
            // },
            // {
            //     question: "기준선의 무결성을 평가하기 위해 확인, 검증, 검열 과정을 통해 공식적으로 승인하는 작업",
            //     answer: "형상 감사"
            // },
            // {
            //     question: "형상의 식별, 통제, 감사 작업의 결과를 기록 및 관리하고 보고서를 작성하는 작업",
            //     answer: "형상 기록"
            // },
        ]
    },
]

export default data;