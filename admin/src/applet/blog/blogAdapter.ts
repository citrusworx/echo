// 
//  @@@ PSEUDOCODE @@@
// 


const blogAdapter = {
    name: "",
    type: "",
    icon: {
        src: "",
        alt: {
            dark: "",
            outlined: ""
        }
    },
    showOnDesktop: false
}
async function blogInit(req: any, res: any){
    res = await('./blog.config.json');
    if(req.params.id === "blog"){
        blogAdapter.name = res.name;
        blogAdapter.type = res.type;
        blogAdapter.icon.src = res.icon.src;
        blogAdapter.showOnDesktop = true;
    }
    
    

}
