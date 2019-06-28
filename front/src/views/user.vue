<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <!-- 영역1 -->
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">GET</h3>
            </div>
          </v-card-title>

          <v-card-text>
            <v-textarea v-model='getModel'>
            </v-textarea>
          </v-card-text>

          <v-card-actions>
            <v-btn flat color="orange" @click="getReq">submit</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>

      <!-- 영역2 -->
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">POST</h3>
            </div>
          </v-card-title>

          <v-card-text>
            <v-textarea v-model='postModel'>
            </v-textarea>
          </v-card-text>

          <v-card-actions>
            <v-btn flat color="orange" @click="postReq">submit</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>

      <!-- 영역3 -->
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">PUT</h3>
            </div>
          </v-card-title>

          <v-card-text>
            <v-textarea v-model='putModel'>
            </v-textarea>
          </v-card-text>

          <v-card-actions>
            <v-btn flat color="orange" @click="putReq">submit</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>

      <!-- 영역4 -->
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">DELETE</h3>
            </div>
          </v-card-title>

          <v-card-text>
            <v-textarea v-model='deleteModel'>
            </v-textarea>
          </v-card-text>

          <v-card-actions>
            <v-btn flat color="orange" @click="deleteReq">submit</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        users: [],
        getModel: '',
        postModel: '',
        putModel: '',
        deleteModel: ''
      }
    },
    mounted () {

    },
    methods : {
      getReq () {
        axios.get('http://localhost:3000/api/user', {
          user : 'getMan'
        })
        .then((r) => {
          this.getModel = JSON.stringify(r.data)
        })
        .catch((e) => {
          console.log(e.message)
        })
      },
      postReq () {
        axios.post('http://localhost:3000/api/user', {
          user : 'postMan'
        })
        .then((r) => {
          this.postModel = JSON.stringify(r.data)
        })
        .catch((e) => {
          console.log(e.message)
        })
      },
      putReq () {
        axios.put('http://localhost:3000/api/user', {
          user : 'putMan'
        })
        .then((r) => {
          this.putModel = JSON.stringify(r.data)
        })
        .catch((e) => {
          console.log(e.message)
        })
      },
      deleteReq () {
        axios.delete('http://localhost:3000/api/user', {
          user : 'delMan'
        })
        .then((r) => {
          this.deleteModel = JSON.stringify(r.data)
        })
        .catch((e) => {
          console.log(e.message)
        })
      }
    }
  }
</script>
