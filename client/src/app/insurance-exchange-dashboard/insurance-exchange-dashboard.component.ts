import { Component, ViewChild, OnInit, AfterViewInit,EventEmitter } from '@angular/core';
import { SchedulerComponent, SchedulerDataSource, SchedulerViews, SchedulerViewType,SchedulerTimelineDayScale   } from 'smart-webcomponents-angular/scheduler';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AgentDeatils} from '../insurance-exchange-if';


@Component({
  selector: 'app-insurance-exchange-dashboard',
  templateUrl: './insurance-exchange-dashboard.component.html'
})
export class InsuranceExchangeDashboardComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  
  closeResult = '';
  showCalenderData:boolean = false;
  headers:string[]= ["SNO","Agent FirstName","Agent LastName","Mobile NO","Schedule a call"]
  agentData:AgentDeatils[]= [{
    agenetFirstName :"Johon",
    agentlastname:"walt",
    agentMobileNo:125481588 
  },{
    agenetFirstName :"Michel",
    agentlastname:"Steve",
    agentMobileNo:12548451188 
  },{
    agenetFirstName :"Rogere",
    agentlastname:"faf",
    agentMobileNo:156515 
  },
  {
    agenetFirstName :"Cleark",
    agentlastname:"Pointing",
    agentMobileNo:156515 
  }];
  makeaAppoitment(agentData:AgentDeatils, scheduleCalender){
    console.log(agentData);
    this.showCalenderData = true;
  }
  closeDialog(data){
    this.showCalenderData = false;
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onDialogCloseSubScription:any  = '';
  onContextMenuOpenSubScription:any = '';
  ngAfterViewInit(): void {
    if(this.scheduler){
      this.onDialogCloseSubScription = this.scheduler.onEditDialogClose.subscribe({
        next: (event: any) => {
          this.onChangeData(event);
        }
      });
      this.onContextMenuOpenSubScription = this.scheduler.onEditDialogOpen.subscribe({
        next: (event: any) => {
          this.contextOpened(event);
        }
      });
    }
  }
  targetEvent = null;
  @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler: SchedulerComponent;
  dataSource: SchedulerDataSource[] = this.getData();
    currentTimeIndicator: Boolean = false;

    shadeUntilCurrentTime: Boolean = false;
    hideWeekend:Boolean =  true;
    disableDrag:Boolean =  true;
    disableResize:Boolean = true;
    //restrictedHours: (number[] | number)[] = [[0, 6], 12, [20, 23]];
    hourStart: number = 9;
    hourEnd: number = 18;
    hideNonworkingWeekdays:Boolean = true;
    nonworkingDays: number[] = [6, 7];
    view: SchedulerViewType = 'day';
    //timelineDayScale: SchedulerTimelineDayScale = 'halfHour';
    allowDrag :Boolean = false;
    views: SchedulerViews[] = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth'];
    restrictedDates = [1,6];
    firstDayOfWeek: Number = 1;
    getData() {
      const today = new Date(),
          todayDate = today.getDate(),
          currentYear = today.getFullYear(),
          currentMonth = today.getMonth(),
          
          data = [
              {
                  label: 'Google AdWords home Data Strategy',
                  dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
                  dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
                  backgroundColor: '#E67C73'
              }, {
                  label: 'New Brochures datad  here ',
                  dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
                  dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
                  backgroundColor: '#8E24AA'
              }, {
                  label: 'Brochure Design Review',
                  dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
                  dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
                  backgroundColor: '#039BE5'
              }
          ]

      return data
  }
  onChangeData(event){
    console.log(event.detail);
  }
  contextOpened(event: CustomEvent) {
    console.log("event " + event);
    document.getElementById("schedulerlabelLabel").innerHTML = "Subject";
  }
 
}
