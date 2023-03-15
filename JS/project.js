//Look at functions.js for the functions for the projects
const root = ReactDOM.createRoot(document.getElementById('project'));

function test(){
    return (
        <content className={"works"}>
            <div id={"cwm"} onClick={MyMod}>
                <h2>Colored Wood Mod</h2>
                <img src={"../pictures/mymod.png"} alt={"Example of the mod"} />
                <p>This Minecraft mod adds in colored wood so you can have more colors to your houses.</p>
            </div>
        </content>
    );
}

root.render(test());