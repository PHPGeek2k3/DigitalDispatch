<template>
  <container class="mt-5">
    <container style="height: 300px"></container>
    <container style="width: 40%; height: 10px; display: inline-block"></container>
    <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
  </container>
</template>

<script>
import { Container, DatePicker } from 'mdbvue';

export default {
  name: 'DatePickerPage',
  components: {
    Container,
    DatePicker

  },
  data() {
    return {
      startTime: {
        time: ''
      },
      option: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD',
        placeholder: 'Please choose a date',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: 'teal',
          headerText: 'white',
          checkedDay: 'teal'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        }
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: '2018-02-01',
        to: '2018-06-20'
      }]
    };
  },
  methods: {
  }
};

</script>

<style>
</style>
