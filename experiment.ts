import { StargateClient } from "@cosmjs/stargate"
const rpc = "146.190.28.151:26657"

const runAll = async() => {
    const client = await StargateClient.connect(rpc)
	try{
	const chainId = await client.getChainId();
        console.log("체인 ID", chainId);
        const height = await client.getHeight();
        console.log("블록 Height",height)
    } catch (err) {
        console.log(err)
    }

}
setInterval(()=> {
	runAll()
},5000)

