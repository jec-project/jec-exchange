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
 * The <code>UserHashModule</code> interface defines the API that must be 
 * implemented by utilities that are responsible for user data encryption.
 */
export interface UserHashModule {

  /**
   * Sets the private key for this <code>UserHashModule</code> instance.
   * 
   * @param {string} key the private key for this <code>UserHashModule</code>
   *                     instance.
   */
  setPrivateKey(key:string):void;

  /**
   * Encrypts the user's information and returns the encrypted data.
   * 
   * @param {string} alias the user's alias.
   * @param {string} password the user's password.
   * @param {Array<string>} roles the user's roles.
   * @return {string} the user's encrypted data.
   */
  encryptUser(alias:string, password:string, roles:string[]):string;

  /**
   * Encrypts the user's specified alias and returns the encrypted data.
   * 
   * @param {string} alias the user's alias.
   * @return {string} the user's encrypted data.
   */
  encryptAlias(alias:string):string;

  /**
   * Encrypts the user's specified password and returns the encrypted data.
   * 
   * @param {string} password the user's password.
   * @return {string} the user's encrypted data.
   */
  encryptPassword(password:string):string;

  /**
   * Encrypts the user's specified roles and returns the encrypted data.
   * 
   * @param {Array<string>} roles the user's roles.
   * @return {string} the user's encrypted data.
   */
  encryptRoles(roles:string[]):string;

  /**
   * Decrypts the user's specified alias and returns the decrypted data.
   * 
   * @param {string} alias the user's encrypted alias.
   * @return {string} the user's decrypted data.
   */
  decryptAlias(alias:string):string;

  /**
   * Decrypts the user's specified roles and returns the decrypted data.
   * 
   * @param {string} roles the user's roles.
   * @return {Array<string>} the user's decrypted data.
   */
  decryptRoles(roles:string):string[];
}