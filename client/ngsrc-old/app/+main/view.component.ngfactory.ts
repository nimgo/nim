/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './view.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router_state';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../_services/hstrigger.service';
import * as import11 from '../_services/me.service';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import15 from '../../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from './layout.component';
import * as import18 from './layout.component.ngfactory';
import * as import19 from 'angular2-moment/time-ago.pipe';
import * as import20 from '@angular/core/src/change_detection/change_detection_util';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '@angular/common/src/location/location_strategy';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '@angular/core/src/zone/ng_zone';
import * as import25 from '@angular/common/src/directives/ng_if';
import * as import26 from '@angular/router/src/directives/router_link';
import * as import27 from '@angular/router/src/directives/router_link_active';
import * as import28 from 'angular2-moment/date-format.pipe';
export class Wrapper_ViewComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ViewComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this.context = new import0.ViewComponent(p0,p1,p2,p3);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_ViewComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_ViewComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ViewComponent>;
  _ViewComponent_0_3:Wrapper_ViewComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ViewComponent_Host0,renderType_ViewComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'view-issue',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ViewComponent0(this.viewUtils,this,0,this._el_0);
    this._ViewComponent_0_3 = new Wrapper_ViewComponent(this.injectorGet(import8.ActivatedRoute,this.parentIndex),this.injectorGet(import9.Router,this.parentIndex),this.injectorGet(import10.HSTriggerService,this.parentIndex),this.injectorGet(import11.MeService,this.parentIndex));
    this.compView_0.create(this._ViewComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._ViewComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ViewComponent) && (0 === requestNodeIndex))) { return this._ViewComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ViewComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ViewComponentNgFactory:import7.ComponentFactory<import0.ViewComponent> = new import7.ComponentFactory<import0.ViewComponent>('view-issue',View_ViewComponent_Host0,import0.ViewComponent);
const styles_ViewComponent:any[] = ([] as any[]);
class View_ViewComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_ViewComponent2,renderType_ViewComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','row pull-right'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','btn btn-success'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Approve',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','btn btn-default'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'Reject',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ViewComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import12.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import13.Wrapper_NgIf;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _el_7:any;
  _RouterLinkWithHref_7_3:import14.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_7_4:import15.Wrapper_RouterLinkActive;
  _query_RouterLink_7_0:import16.QueryList<any>;
  _query_RouterLinkWithHref_7_1:import16.QueryList<any>;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _el_17:any;
  compView_17:import1.AppView<import17.LayoutComponent>;
  _LayoutComponent_17_3:import18.Wrapper_LayoutComponent;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  /*private*/ _expr_30:any;
  /*private*/ _expr_31:any;
  _pipe_amDateFormat_0_0:any;
  _pipe_amTimeAgo_0:import19.TimeAgoPipe;
  /*private*/ _expr_34:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_ViewComponent1,renderType_ViewComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_30 = import20.UNINITIALIZED;
    this._expr_31 = import20.UNINITIALIZED;
    this._expr_34 = import20.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','container col-lg-8 col-lg-offset-2 col-md-12'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import12.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import21.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import13.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'h4',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_6,'a',new import3.InlineArray2(2,'routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_7_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router,this.parentIndex),this.parentView.injectorGet(import8.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import22.LocationStrategy,this.parentIndex));
    this._RouterLinkActive_7_4 = new import15.Wrapper_RouterLinkActive(this.parentView.injectorGet(import9.Router,this.parentIndex),new import23.ElementRef(this._el_7),this.renderer,this.parentView.ref);
    this._query_RouterLink_7_0 = new import16.QueryList<any>();
    this._query_RouterLinkWithHref_7_1 = new import16.QueryList<any>();
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_4,'',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_4,'div',new import3.InlineArray2(2,'class','panel panel-default'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n            ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'div',new import3.InlineArray2(2,'class','panel-body'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._text_15 = this.renderer.createText(this._el_4,'\n\n\n        ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_4,'p',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_16,'hx-layout',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_17 = new import18.View_LayoutComponent0(this.viewUtils,this,17,this._el_17);
    this._LayoutComponent_17_3 = new import18.Wrapper_LayoutComponent();
    this.compView_17.create(this._LayoutComponent_17_3.context);
    this._text_18 = this.renderer.createText(this._el_4,'\n\n        ',(null as any));
    this._text_19 = this.renderer.createText(this._el_4,'\n\n    ',(null as any));
    this._text_20 = this.renderer.createText(this._el_0,'\n\n\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_7,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_7));
    this._pipe_amDateFormat_0_0 = import3.pureProxy2((<View_ViewComponent0>this.parentView)._pipe_amDateFormat_0.transform.bind((<View_ViewComponent0>this.parentView)._pipe_amDateFormat_0));
    this._pipe_amTimeAgo_0 = new import19.TimeAgoPipe(this.parentView.ref,this.parentView.injectorGet(import24.NgZone,this.parentIndex));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._text_20
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import25.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    if (((token === import26.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._RouterLinkWithHref_7_3.context; }
    if (((token === import27.RouterLinkActive) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._RouterLinkActive_7_4.context; }
    if (((token === import17.LayoutComponent) && (17 === requestNodeIndex))) { return this._LayoutComponent_17_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import20.ValueUnwrapper();
    const currVal_2_0_0:any = this.parentView.context.canAction;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_7_0_0:any = import3.inlineInterpolate(1,'/view/',((this.parentView.context.trigger == null)? (null as any): this.parentView.context.trigger.id),'');
    this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0,throwOnChange,false);
    this._RouterLinkWithHref_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    const currVal_7_1_0:any = 'active';
    this._RouterLinkActive_7_4.check_routerLinkActive(currVal_7_1_0,throwOnChange,false);
    this._RouterLinkActive_7_4.ngDoCheck(this,this._el_7,throwOnChange);
    const currVal_17_0_0:any = ((this.parentView.context.trigger.flow == null)? (null as any): this.parentView.context.trigger.flow.layout);
    this._LayoutComponent_17_3.check_blobber(currVal_17_0_0,throwOnChange,false);
    this._LayoutComponent_17_3.ngDoCheck(this,this._el_17,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_7_0.dirty) {
        this._query_RouterLink_7_0.reset(([] as any[]));
        this._RouterLinkActive_7_4.context.links = this._query_RouterLink_7_0;
        this._query_RouterLink_7_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_7_1.dirty) {
        this._query_RouterLinkWithHref_7_1.reset([this._RouterLinkWithHref_7_3.context]);
        this._RouterLinkActive_7_4.context.linksWithHrefs = this._query_RouterLinkWithHref_7_1;
        this._query_RouterLinkWithHref_7_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_7_4.context.ngAfterContentInit(); }
    }
    this._RouterLinkWithHref_7_3.checkHost(this,this,this._el_7,throwOnChange);
    const currVal_30:any = import3.inlineInterpolate(1,'',((this.parentView.context.trigger == null)? (null as any): this.parentView.context.trigger.title),'');
    if (import3.checkBinding(throwOnChange,this._expr_30,currVal_30)) {
      this.renderer.setText(this._text_8,currVal_30);
      this._expr_30 = currVal_30;
    }
    valUnwrapper.reset();
    const currVal_31:any = import3.inlineInterpolate(2,'\n        ',valUnwrapper.unwrap(import3.castByValue(this._pipe_amDateFormat_0_0,(<View_ViewComponent0>this.parentView)._pipe_amDateFormat_0.transform)(this.parentView.context.trigger.started_dt,'DD MMM YYYY HH:mm')),' (',valUnwrapper.unwrap(this._pipe_amTimeAgo_0.transform(this.parentView.context.trigger.started_dt)),')\n        ');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_31,currVal_31))) {
      this.renderer.setText(this._text_9,currVal_31);
      this._expr_31 = currVal_31;
    }
    const currVal_34:any = import3.inlineInterpolate(1,'\n                ',((this.parentView.context.trigger == null)? (null as any): this.parentView.context.trigger.subtitle),'\n            ');
    if (import3.checkBinding(throwOnChange,this._expr_34,currVal_34)) {
      this.renderer.setText(this._text_13,currVal_34);
      this._expr_34 = currVal_34;
    }
    this.compView_17.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this.compView_17.destroy();
    this._RouterLinkWithHref_7_3.ngOnDestroy();
    this._RouterLinkActive_7_4.ngOnDestroy();
    this._pipe_amTimeAgo_0.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 2)) { return new View_ViewComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
  handleEvent_7(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_7_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
var renderType_ViewComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_ViewComponent,{});
export class View_ViewComponent0 extends import1.AppView<import0.ViewComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import12.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import13.Wrapper_NgIf;
  _text_1:any;
  _pipe_amDateFormat_0:import28.DateFormatPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ViewComponent0,renderType_ViewComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import12.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import21.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import13.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._pipe_amDateFormat_0 = new import28.DateFormatPipe();
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._anchor_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import25.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.trigger;
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 0)) { return new View_ViewComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}