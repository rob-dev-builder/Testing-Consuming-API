import request from 'superagent'

export function getYoda (cb) {
  request
      // .get('https://yoda.p.mashape.com/yoda?sentence=you+will+learn')
     .get('https://yoda.p.mashape.com/yoda')
     .set('X-Mashape-Key', 'ZMJzgwcAscmshawAmUX4cX74S9eRp1cNhTwjsne44SVA72j5LC')
     .set('Accept','text/plain')
   .end((err,res)=>{
     if (err) {
       cb(err.message)
       return
     }
    // console.log(res.text)
     const yoda = res.text
     cb(null, yoda)
   })
}
