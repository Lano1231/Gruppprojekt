<template>
  <div class="chat" ref="chatContainer">
    <div class="chat-header">
      <h3 class="chat-title">Chatta med oss!</h3>
      <button class="btn btn-primary" @click="toggleChat">
        {{ toggleText }}
      </button>
    </div>
    <div v-show="showChat" class="chat-body" ref="chatBody">
      <div
        v-for="(message, index) in filteredMessages"
        :key="index"
        class="message"
      >
        <div class="mdlkrop">
          {{ message.text }}
          <div v-if="message.replyTo" class="reply-message">
            Till: {{ getReplyMessageText(message.replyTo) }}
          </div>
        </div>
        <div class="mdltid">{{ message.time }}</div>
        <button
          v-if="!message.replyTo"
          class="btn btn-reply"
          @click="setReplyingTo(message.id)"
        >
          Svara
        </button>
      </div>
      <form @submit.prevent="sendMessage" class="form-send">
        <input
          type="text"
          v-model="newMessage"
          placeholder="Skriv här för att chatta!"
          class="form-control"
        />
        <button type="submit" class="btn btn-primary btn-send">Skicka</button>
      </form>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Sök efter ett specifikt meddelande!"
        class="form-control"
      />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showChat: false,
        messages: [
          {
            id: this.generateUniqueId(),
            text: 'Hej, mitt namn är Lano',
            time: '2 minuter sedan'
          },
          {
            id: this.generateUniqueId(),
            text: 'Vad kan jag hjälpa dig med idag?',
            time: '1 minut sedan'
          },
          {
            id: this.generateUniqueId(),
            text: 'Hör av dig om du har någon fråga :)',
            time: '1 minut sedan'
          }
        ],
        newMessage: '',
        toggleText: 'Vi är här för att hjälpa dig',
        firstMessageSent: false,
        replyingTo: null,
        searchQuery: ''
      }
    },
    computed: {
      filteredMessages() {
        if (this.searchQuery.trim() === '') {
          return this.messages
        } else {
          const query = this.searchQuery.trim().toLowerCase()
          return this.messages.filter((message) =>
            message.text.toLowerCase().includes(query)
          )
        }
      }
    },
    methods: {
      toggleChat() {
        this.showChat = !this.showChat
        this.toggleText = this.showChat
          ? 'Stäng chatten'
          : 'Vi är här för att hjälpa dig'
        this.scrollChat()
      },
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          const message = {
            id: this.generateUniqueId(),
            text: this.newMessage,
            time: new Date().toLocaleTimeString(),
            replyTo: this.replyingTo
          }
          this.messages.push(message)
          if (!this.firstMessageSent) {
            const botMessage = {
              id: this.generateUniqueId(),
              text: 'Återkommer strax!',
              time: new Date().toLocaleTimeString()
            }
            this.messages.push(botMessage)
            this.firstMessageSent = true
          }
          this.newMessage = ''
          this.replyingTo = null
          this.scrollChat()
        }
      },
      scrollChat() {
        const chatContainer = this.$refs.chatContainer
        const chatBody = this.$refs.chatBody

        if (chatBody.clientHeight < chatBody.scrollHeight) {
          chatContainer.scrollTop = chatBody.scrollHeight
        }
      },
      generateUniqueId() {
        return Math.random().toString(36).substr(2, 9)
      },
      setReplyingTo(messageId) {
        this.replyingTo = messageId
        this.scrollChat()
      },
      getReplyMessageText(messageId) {
        const replyMessage = this.messages.find(
          (message) => message.id === messageId
        )
        return replyMessage ? replyMessage.text : ''
      }
    },
    mounted() {
      this.scrollChat()
    }
  }
</script>

<style scoped>
  .chat {
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 999;
  }

  .btn-send {
    margin-top: 10px;
  }

  .chat-header {
    background-color: #d3d1d1a9;
    padding: 15px;
    border-radius: 25px 25px 25px 0px;
  }

  .chat-title {
    margin-bottom: 10px;
  }

  .chat-body {
    background-color: #ffffff;
    border-radius: 0px 25px 25px 25px;
    border: 1px solid #ffffffce;
    padding: 15px;
    max-height: 350px;
    max-width: 500px;
    overflow-y: scroll;
    flex-grow: 1;
    position: relative;
  }

  .messages {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    top: 0;
  }

  .message {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  .mdlkropp {
    flex-grow: 1;
    padding: 5px;
    background-color: #fffefe;
    border-radius: 5px;
  }

  .mdltid {
    flex-shrink: 0;
    margin-left: 10px;
    color: #d7d2d2;
  }

  .form-send {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
  }

  .form-control {
    width: calc(100% - 100px);
    height: 100%;
    margin-right: 10px;
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
  }

  .btn-send {
    width: 100px;
    height: 100%;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 10 10px 10px 10;
    cursor: pointer;
  }

  .form-send {
    display: flex;
    align-items: center;
    margin-top: 10px;
    position: sticky;
    bottom: 0;
    background-color: #f8f8f8;
    border-radius: 0px 0px 10px 10px;
    padding: 5px;
    height: 50px;
  }

  .form-control:focus {
    box-shadow: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #046ddd;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #363636;
  }

  .form-control {
    flex-grow: 1;
    height: 38px;
    margin-right: 10px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    line-height: 1.5;
    box-shadow: none;
    outline: none;
  }
</style>

<style scoped>
  .chat {
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 999;
  }

  .btn-send {
    margin-top: 10px;
  }

  .chat-header {
    background-color: #d3d1d1a9;
    padding: 15px;
    border-radius: 25px 25px 25px 0px;
  }

  .chat-title {
    margin-bottom: 10px;
  }

  .chat-body {
    background-color: #ffffff;
    border-radius: 0px 25px 25px 25px;
    border: 1px solid #ffffffce;
    padding: 15px;
    max-height: 350px;
    max-width: 500px;
    overflow-y: scroll;
    flex-grow: 1;
    position: relative;
  }

  .messages {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    top: 0;
  }

  .message {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  .mdlkropp {
    flex-grow: 1;
    padding: 5px;
    background-color: #fffefe;
    border-radius: 5px;
  }

  .mdltid {
    flex-shrink: 0;
    margin-left: 10px;
    color: #d7d2d2;
  }

  .form-send {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
  }

  .form-control {
    width: calc(100% - 100px);
    height: 100%;
    margin-right: 10px;
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
  }

  .btn-send {
    width: 100px;
    height: 100%;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 10 10px 10px 10;
    cursor: pointer;
  }

  .form-send {
    display: flex;
    align-items: center;
    margin-top: 10px;
    position: sticky;
    bottom: 0;
    background-color: #f8f8f8;
    border-radius: 0px 0px 10px 10px;
    padding: 5px;
    height: 50px;
  }

  .form-control:focus {
    box-shadow: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #046ddd;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #363636;
  }

  .form-control {
    flex-grow: 1;
    height: 38px;
    margin-right: 10px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    line-height: 1.5;
    box-shadow: none;
    outline: none;
  }
</style>
