class userInterface {
    constructor() {
        this.userProfile = document.querySelector('.output');
    }


    showRepo(repository) {
        let repos = ""
        let count = 0

        repository.forEach(repo => {
            if (count < 5) {
                repos += `<li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <a href="${repo.clone_url}">${repo.name}</a>
                </li>`
                count++
            } else {
                return
            }
        })

        return repos;
    }
    showProfile(userData, repo) {

        let result = this.showRepo(repo)
        this.userProfile.innerHTML = `
        <div class="mt-6 flex justify-betwwen max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 ">
                <div class="hidden px-8 aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                  <img src="${userData.avatar_url}" alt="" class="object-center rounded-full object-cover">
                </div>
                <div class="flex-initial">
                    <h1 class="text-black text-4xl">${userData.name}</h1>
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Github Information</h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and Repositories.</p>
                    </div>
                    <div class="border-t border-gray-200">
                    <dl>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Full name</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${userData.name}</dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Twitter Username</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${userData.twitter_username}</dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Email address</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${userData.email}</dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Blog</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${userData.blog}</dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Followers</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${userData.followers}</dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Repositories</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                                ${result}
                            </ul>
                        </dd>
                        </div>
                    </dl>
                    </div>
                    </div>
                </div>
            </div>
            <div>
            </div>

        </div>`
    }
}


