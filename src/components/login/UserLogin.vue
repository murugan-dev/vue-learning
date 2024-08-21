<template>
  <div
    class="bg-[#5B479C] h-[100vh] w-[100vw] flex justify-center items-center"
  >
    <form action="" @submit.prevent="handleSubmit">
      <div class="h-fit w-[500px] bg-white rounded-3xl p-10">
        <div>
          <div class="flex justify-center items-center flex-col p-5">
            <h1 class="font-bold text-3xl p-3">Welcome Back!!</h1>
            <p class="font-thin">Enter your details below</p>
          </div>

          <div class="flex justify-center flex-col">
            <label for="mail" class="p-2">User Name</label>
            <input
              type="text"
              placeholder="Enter Mail"
              name="mail"
              v-model="userName"
              class="border-2 border-gray-100 p-5 focus:border-violet-800 focus:border-2 rounded-md"
            />
            <label for="password" class="p-5 -ml-4">Password</label>

            <input
              type="password"
              placeholder="Password"
              v-model="password"
              class="border-2 border-gray-100 p-5 focus:border-violet-800 focus:border-2 rounded-md"
            />
            <div class="flex justify-center items-center p-5">
              <button
                class="h-14 w-4/5 bg-blue-500 text-white align-center rounded-full cursor-pointer font-bold"
              >
                Sigin
              </button>
            </div>
            <!-- <router-link to="/home">
                    </router-link> -->
          </div>
        </div>

        <p class="text-center">
          Don't have Account?<router-link to="/regtration" class="text-blue-400"
            >Register here</router-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log({ email: this.userName, password: this.password });

      console.log({ userName: this.userName, password: this.password });

     
      fetch(`http://localhost:3000/users`)
        .then((res) => res.json())
        .then((users) => {
          const user = users.find((u) => u.userName === this.userName);
          if (!user) {
            // alert("User not found. Please enter valid values");
            console.log("User not found. Please enter valid values")
          } else if (this.password === user.password) {
            // alert("Login success");
            console.log("Login success")
            this.$router.push("/home");
          } else {
            // alert("Please enter the correct password");
            console.log("Please enter the correct password")

          }
        })
        .catch((err) => {
          console.error("An error occurred:", err.message);
        });
    },
  },
};
</script>
