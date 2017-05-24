import request from 'superagent'

export function getYoda (myText, cb) {
  myText = myText.replace(/ /gi, '+') // replacing spaces with '+'
  console.log('In the getYoda function: '+ myText)

  request
     .get('https://yoda.p.mashape.com/yoda?sentence=' + myText)
     .set('X-Mashape-Key', 'ZMJzgwcAscmshawAmUX4cX74S9eRp1cNhTwjsne44SVA72j5LC')
     .set('Accept','text/plain')
   .end((err,res)=>{
     if (err) {
       cb(err.message)
       return
     }
     const yoda = res.text
     cb(null, yoda)
   })
}
