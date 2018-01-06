//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

/**
 * The <code>WebJsletParams</code> interface defines the API you must implement 
 * to create objects passed as parameter of the <code>@WebJslet</code>
 * decorator.
 */
export interface WebJsletParams {
  
  /**
   * The name of the jslet.
   */
  name:string;
  
  /**
   * An array that contains all URL patterns associated with the jslet.
   */
  urlPatterns:string[];

  /**
   * The path to the template associated with the jslet. This parameter is
   * optional.
   */
  template?:string;
}
