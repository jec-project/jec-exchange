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

import {DotFiles} from "./DotFiles";

/**
 * This interface defines the options for the <code>sendFile()</code> method of
 * the <code>HttpResponse</code> class.
 */
export interface SendFileOptions {

  /**
   * The <code>max-age</code> property of the <code>Cache-Control</code> header,
   *  in milliseconds, or a string in ms format.
   */
  maxAge?:number|string;
  
  /**
   * The "root" directory for relative filenames.
   */
  root?:string;
  
  /**
   * If <code>true</code>, sets the <code>Last-Modified</code> header to the 
   * last modified date of the file. Set <code>false</code> to disable it.
   */
  lastModified?:boolean;
  
  /**
   * Contains the HTTP headers to serve with the file.
   */
  headers?:any;
  
  /**
   * An option for serving dotfiles.
   */
  dotfiles?:DotFiles;
  
  /**
   * Indicates whether to accept ranged requests (<code>true</code>), or not
   * (<code>false</code>).
   */
  acceptRanges?:boolean;
  
  /**
   * Indicates whether to enable setting the <code>Cache-Control</code> response
   * header (<code>true</code>), or not (<code>false</code>).
   */
  cacheControl?:boolean;
}