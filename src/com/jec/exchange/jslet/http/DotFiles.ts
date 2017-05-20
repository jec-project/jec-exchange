//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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
 * A collection of constants values that can be used to specify the
 * <code>dotfiles</code> property of a <code>SendFileOptions</code> object.
 */
export class DotFiles {

  /**
   * Indicates that a HTTP response allows to serve dotfiles.
   */
  public static readonly ALLOW:string = "allow";
  
  /**
   * Indicates that a HTTP response denies to serve dotfiles.
   */
  public static readonly DENY:string = "deny";
  
  /**
   * Indicates that a HTTP response ignores serving dotfiles.
   */
  public static readonly IGNORE:string = "ignore";
}