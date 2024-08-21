<template>
  <div
    class="bg-[#5B479C] h-[100vh] w-[100vw] flex justify-center items-center"
  >
    <form action="" @submit.prevent="handleSubmit">
      <div class="bg-white h-fit w-fit p-5 rounded-2xl">
        <h1 class="font-bold text-3xl p-5 text-center">Registration Form</h1>
        <div class="flex justify-center gap-10 p-5">
          <div>
            <div>
              <label class="font-bold p-1">User Name</label><br />
              <input
                v-model="userName"
                type="text"
                placeholder="Enter Name"
                class="border-2 border-gray-100 p-5 focus:border-violet-800 focus:border-2 rounded-md"
              />
            </div>

            <div>
              <label for="fullName" class="font-bold p-1">Full Name</label
              ><br />
              <input
                v-model="fullName"
                type="text"
                placeholder="Enter full name"
                class="border-2 border-gray-100 p-5 focus:border-violet-800 focus:border-2 rounded-md"
              />
            </div>
            <div>
              <label for="Address" class="font-bold p-1">Address</label><br />
              <input
                v-model="address"
                type="text"
                placeholder="Enter Address"
                class="border-2 border-gray-100 p-5 focus:border-violet-800 focus:border-2 rounded-md"
              />
            </div>
          </div>
          <div>
            <div>
              <label for="Email" class="font-bold p-1">Email</label><br />
              <input
                v-model="email"
                type="email"
                placeholder="Enter Email"
                class="border-2 border-gray-100 p-5 focus:border-violet-800 focus:border-2 rounded-md"
              />
            </div>
            <div>
              <label for="password" class="font-bold p-1">Password</label><br />
              <input
                v-model="password"
                type="password"
                placeholder="Enter Password"
                class="border-2 border-gray-100 p-5 focus:border-violet-800 focus:border-2 rounded-md"
              />
            </div>
            <div>
              <label for="phone" class="font-bold p-1">Phone number</label
              ><br />
              <input
                v-model="phone"
                type="number"
                placeholder="Enter phone number"
                class="border-2 border-gray-100 p-5 focus:border-violet-800 focus:border-2 rounded-md"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center p-5">
          <button
            type="submit"
            class="h-14 w-4/5 bg-blue-500 text-white align-center rounded-full cursor-pointer font-bold"
          >
            Register
          </button>
        </div>
        <!-- <router-link to="/">
        </router-link> -->
        <p class="text-center p-5">
          Already have Account?<router-link to="/" class="text-blue-400"
            >login here</router-link
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
      fullName: "",
      address: "",
      email: "",
      password: "",
      phone: "",
    };
  },
  methods: {
    handleSubmit() {
      const userDetails = {
        userName: this.userName,
        fullName: this.fullName,
        address: this.address,
        email: this.mail,
        password: this.password,
        phone: this.phone,
      };

      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userDetails),
      })
        .then(() => {
         console.log("regiter successfull")
        })
        .catch((err) => {
          console.log(err.message)
        });

      this.$router.push("/");
    },
  },
};
</script>
