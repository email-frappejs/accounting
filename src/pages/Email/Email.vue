<template>
        <div class="frappe-list">
            <list-actions
              :doctype="doctype"
              :name="name"
              @compose="newDoc"
            />
            <br>
            <ul class="row title">
                <span class="col-2 ">From</span>
                <span class="col">Subject </span>
                <span class="col-3">Date </span>
            </ul>
            <ul class="list-group">
                <list-item v-for="doc of data" :key="doc.name"
                    :isActive="doc.name === $route.params.name"
                    @clickItem="openMail(doc.name)">
                    <span class="col-2 text-truncate">{{ doc.fromEmailAddress }}</span>
                    <span class="col text-truncate">{{ doc.subject }}</span>
                    <span class="col-3">{{ doc.modified }} </span>
                </list-item>
            </ul>
        </div>
</template>
<script>
import { _ } from 'frappejs/utils';
import List from 'frappejs/ui/components/List/List';
import frappe from 'frappejs';
import Form from 'frappejs/ui/components/Form/Form';
import ListItem from 'frappejs/ui/components/List/ListItem';
import ListActions from './EmailActions';
import EmailSend from './EmailSend';

export default {
  name: 'EmailList',
  props: ['doctype', 'name'],
  components: {
    ListActions,
    ListItem
  },
  data() {
    return {
      data: [],
    };
  },
  async created() {
    this.$root.$emit('toggleEmailSidebar', true);
    const data = await frappe.db.getAll({
      doctype: this.doctype,
      fields: ['name', 'fromEmailAddress', 'subject', 'modified']
    });
    this.data = data;
  },
  methods: {
    async newDoc() {
      let doc = await frappe.getNewDoc(this.doctype);
      this.$modal.show({
        component: EmailSend,
        props: {
          doctype: doc.doctype,
          name: doc.name
        }
      });
      doc.on('afterInsert', data => {
        this.$modal.hide();
      });
    },
    async openMail(name) {
      this.$router.push(`/view/${this.doctype}/${name}`);
    }
  }
};
</script>
<style>
.list-group {
  cursor: pointer;
}
.title div {
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: row;
}
</style>