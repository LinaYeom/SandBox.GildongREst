import "./styles.css";

const SaramTitle = () => {
  return (
    <>
      <h1>길동 반점 메뉴 목록</h1>
      <h2>길동 반점 여름 특별식</h2>
    </>
  );
};
//메뉴라는 엘리먼트 컴포넌트에 아이템이라는 값을 넘겨줘야한다.
// javascript 에서는 매개변수는 큰의미가 없다 그래서 가상이름을쓴다. (일반적으로)
const Menu = (props) => {
  return (
    <h3>
      {props.name} : {props.item}
    </h3>
  );
}; // 생성자 호출 해준다.  함수용 프로그램이라고 생각하자1

const MenuItems = ["짜장면", "짬뽕", "팔보채", "마파두부", "탕수육"];

export default function App() {
  return (
    <div className="App">
      <SaramTitle />
      {
        // map 은 내용과새롱것을 결합시켜서 새로운 배열을 만들어주는 것,
        MenuItems.map((item) => {
          return <Menu name="여름 특별식" item={item} />;
          // 컴포넌트 객체
        })
      }
    </div>
  );
}
