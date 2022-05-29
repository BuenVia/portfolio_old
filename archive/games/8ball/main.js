const btn = document.querySelector('.btn');
const response = document.querySelector('#response');


const a = 'As I see it, yes.';
const b = 'Ask again later.';
const c = 'Better not tell you now.';
const d = 'Cannot predict now.';
const e = 'Concentrate and ask again.';
const f = 'Don’t count on it.';
const g = 'It is certain.';
const h = 'It is decidedly so.';
const i = 'Most likely.';
const j = 'My reply is no.';
const k = "My sources say no.";
const l = 'Outlook not so good.';
const m = 'Outlook good.';
const n = 'Reply hazy, try again.';
const o = 'Signs point to yes.';
const p = 'Very doubtful.';
const q = 'Without a doubt.';
const r = 'Yes.';
const s = 'Yes – definitely.';
const t = 'You may rely on it.';

const answer = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t]

btn.addEventListener('click', function() {
    let result = answer[Math.floor(Math.random() * answer.length)];
    console.log(result);

    response.textContent = result

})