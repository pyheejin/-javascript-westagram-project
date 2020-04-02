const inPut = document.getElementById('comm');
const delBtn = document.getElementById('deleteComment');
const write = document.getElementById('write');

inPut.addEventListener('keypress', function() {
    write.style.color='#2d89f3';
})

function uploadComment(e) {

    if (e.keyCode === 13 && inPut.value) {
        const div = document.getElementById('card')
        const wrap = document.createElement('div')
        const user = document.createElement('span'); // 유저 이름 넣을 span 태그 만들기
        const msg = document.createElement('span'); // 메시지 넣을 span 태그 만들기
        const del = document.createElement('button'); // 삭제버튼

        // 유저랑 메시지에 클래스 이름 넣어주기
        wrap.className = 'commentWrap';
        user.className = "commentName";
        msg.className = "msg";
        del.className = "deleteComment";
        
        msg.innerHTML = inPut.value; // 메시지 입력창에 입력하기
        user.innerHTML = "dubu"; // 사용자 이름 정하기
        del.innerHTML = "삭제";
        

        div.appendChild(wrap);
        wrap.appendChild(user);
        wrap.appendChild(msg);
        wrap.appendChild(del);

        inPut.value = '';
    }
}
inPut.addEventListener('keyup', uploadComment);