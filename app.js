const input = document.querySelector('.input');
const output = document.querySelector('.output')

const gitHub = new gitHubInfo;

const ui = new userInterface;

input.addEventListener('keyup', (e)=>{
    const userinput = e.target.value

    if (userinput !== '') {
        gitHub.getUser(userinput).then((data)=>{
            if (data.userResponseData.message === 'Not Found') {
                output.innerHTML = `<h1 class="text-center text-4xl">USER NOT FOUND</h1>`
            }else {
                ui.showProfile(data.userResponseData,data.repoData);
            }
        
        })
    }

}); 