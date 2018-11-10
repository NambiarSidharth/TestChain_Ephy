let lotion = require('lotion')
let coin = require('coins')
let app = lotion({
    intialState:{contentLib:[],
    transactions:[],
    users:[]},
    keyPath:"./config/priv_key_KSN.json",
    genesisPath:"./config/genesis.json",
    logTendermint: true,
    p2pPort:46658,
    rpcPort:46657,
    peers:[]
})
let yourAddress='K4mzLmDAfoRJuYHkyZL8nfMjkdDc882C';
let addMusicHandler = function(state,tx,chainInfo){
    let Contributorname = tx.content.name;
    // let ContributorId = tx.content.Id;
    // let ContentName = tx.contentName;
    // let ContentHash = tx.Hash;
    if(tx.reType==='addContent'){
        state.contentLib.push(tx.values)
    }
}
let addUser = function(state,tx,chainInfo){
    if(tx.reType === 'register'){
        state.users.push(tx.values);
    }
}
//Authentication still needs time

/*
let Auth = function(state,tx,chainInfo){
    if(tx.reType === 'Authentication'){
        let len = state.users.length
        for(i=0;i<length;++i){
            if(state.users[i].userName === tx.values.userName){
                if(state.users[i].password === tx.values.password){
                    
                }
            }
        }
    }
}
*/
app.use(addMusicHandler)
app.use(addUser)
//transactionhandler for coin exchange(requires more testing)
/*
app.use(coin({
    // coins options
    name: 'testcoin',
    initialBalances: {
      yourAddress : 21000000
    }
  }))

*/
app.start().then(console.log)