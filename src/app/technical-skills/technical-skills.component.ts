import { Component, OnInit } from '@angular/core';
import { TechnicalSkill } from '../@models/TechnicalSkill';
import { OtherSkill } from '../@models/OtherSkill';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {

  public TechnicalSkills: TechnicalSkill[]= TechnicalSkill.GetTechnicalSkills();
  public OtherSkills: OtherSkill[]= OtherSkill.GetOtherSkills();
  
  constructor() { 
  }

  ngOnInit() {
  }

}