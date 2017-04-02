import React, {Component} from 'react';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    window.addEventListener('popstate', function(event) {
    });

  }

  render() {
    window.onpopstate = function(event) {
      alert('aaa')
    };
    console.log('*********',window.history)

    return (
      <div>
        <h1 >hello world!</h1>
        <input
          type="button"
          value="后退"
          onClick={()=>{
            alert('aaaa')
            history.back()
          }}
        />

        <input
          type="button"
          value="刷新页面"
          onClick={()=>{
            history.go(0)
          }}
        />

        <input
          type="button"
          value="前进"
          onClick={()=>{
            history.forward()
          }}
        />

        <input
          type="button"
          value="执行pushState，跳到一个新的URl,直接跳转不会重新render，history.length+1"
          onClick={()=>{
            history.pushState({page:1},null,'http://localhost:3000?name=zhangpei&age=18')
          }}
        />

        <input
          type="button"
          value="执行replaceState跳到一个新的URl,直接跳转不会重新render，history.length不变"
          onClick={()=>{
            history.replaceState({page:1},null,'http://localhost:3000/pushState')
          }}
        />

      </div>
    );
  }
}