<script>

export default{
    data(){
        return{
            student : [],
            url : 'http://127.0.0.1:8000/api/student_list/'
        }
    },
    methods: {
        async fetchData(){
            try{
                const res = await fetch(this.url,{
            headers: {
                'Authorization': 'Basic ' + btoa('murugan:123'),
                'Content-Type': 'application/json'
            }
        });
                const data = await res.json();
                this.student = data;
                console.log(this.student)
            }catch(err){
                console.log(err);
            }
        }
    },
    mounted(){
        this.fetchData();
    },
    updated(){
        this.student
    }
}


</script>


<template>
    <h1 class="text-center mt-2 font-bold text-2xl">Student Detail</h1>

    <!-- <div class="flex justify-center items-center mt-2">
        <input type="text" placeholder="search roll number or name " class="border-2 border-gray-400 rounded-md w-80 pl-3 py-2 focus:border-indigo-500 focus:border-2">
    </div> -->
    

    <!-- <h1>Student List</h1> -->
    <div class="flex justify-center items-center">

        <table class="w-4/5 border-2 border-gray-400 mt-2 mx-5 rounded-md">
         <tr class="text-left p-10">
            <th>#</th>
            <th>RollNo.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Joined</th>
         </tr>
         <tr v-for="item in student" :key="item.id" class="p-6">
            <td>{{ item.id }}</td>
            <td>{{ item.register }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.contactnumber }}</td>
            <td>{{ item.join_date }}</td>
         </tr>
    
        </table>
    </div>



</template>

<style scoped>

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

</style>