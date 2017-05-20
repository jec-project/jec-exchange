// Type definitions for jec-exchange
// Project: JEC Exchange
// Definitions by: Pascal ECHEMANN <https://github.com/pechemann/JEC>

// Please maintain packages and alphabetical order.

declare module "jec-exchange" {

import { Logger, UrlPattern } from "jec-commons";

export interface WebJsletParams {
    name: string;
    urlPatterns: string[];
    template?: string;
}

export function WebJslet(params: WebJsletParams): Function;

export interface JsletContext {
    addJslet(jslet: Jslet): void;
    getJslet(url: string): Jslet;
    getStatusInfo(): any;
    getDirectoryPath(): string;
    getSourcePath(): string;
    getSecurityContext(): SecurityContext;
    getSessionContext(): SessionContext;
    authenticate(req: HttpRequest, res: HttpResponse, result: (error?: any) => void): void;
    invalidateSession(req: HttpRequest, res: HttpResponse, result: (error?: SessionError) => any): void;
    getLogger(): Logger;
}

export class JsletError extends Error {
    constructor(message: string);
}

export interface CookieOptions {
    domain?: string;
    encode?: Function;
    expires?: Date;
    httpOnly?: boolean;
    maxAge?: number;
    path?: string;
    secure?: boolean;
    signed?: boolean;
    sameSite?: string | boolean;
}

export class DotFiles {
    static readonly ALLOW: string;
    static readonly DENY: string;
    static readonly IGNORE: string;
}

export interface HttpRequest {
    getBaseUrl(): string;
    getBody(): any;
    getCookies(): any;
    getHostname(): string;
    getIp(): string;
    getMethod(): string;
    getOriginalUrl(): string;
    getPath(): string;
    getProtocol(): string;
    getQuery(): any;
    isSecured(): boolean;
    accepts(types: string | string[]): string | void;
    acceptsCharsets(charset: string | string[]): string | boolean;
    acceptsEncodings(encoding: string | string[]): string | boolean;
    acceptsLanguages(lang: string | string[]): string | boolean;
    getHeader(field: string): string;
    isTypeOfContent(type: string | string[]): boolean;
}

export interface HttpResponse {
    getHeadersSent(): boolean;
    attachment(filename?: string): HttpResponse;
    cookie(name: string, value: string, options?: CookieOptions): HttpResponse;
    clearCookie(name: string, options?: CookieOptions): HttpResponse;
    download(path: string, filename?: string, complete?: (err?: Error) => any): void;
    end(data?: string | Buffer, encoding?: string): HttpResponse;
    format(obj: any): HttpResponse;
    getHeader(field: string): string;
    links(links: any): HttpResponse;
    location(path: string): HttpResponse;
    redirect(path: string): HttpResponse;
    send(body: any): HttpResponse;
    sendFile(path: string, options?: SendFileOptions, complete?: (err?: Error) => any): HttpResponse;
    sendStatus(statusCode: number): HttpResponse;
    setHeader(field: string, value: string): HttpResponse;
    status(statusCode: number): HttpResponse;
    type(type: string): HttpResponse;
    vary(field: string): HttpResponse;
}

export interface SendFileOptions {
    maxAge?: number | string;
    root?: string;
    lastModified?: boolean;
    headers?: any;
    dotfiles?: string;
    acceptRanges?: boolean;
    cacheControl?: boolean;
}

export class JsletConnectorRefs {
    static readonly WEB_JSLET_CONNECTOR_REF: string;
}

export class HttpJslet implements Jslet {
    constructor();
    private static readonly EMPTY_DATA;
    protected __context: JsletContext;
    protected __template: string;
    init(): void;
    destroy(): void;
    before(): void;
    after(): void;
    getContext(): JsletContext;
    get(key: string): any;
    getName(): string;
    getTemplate(): string;
    setTemplate(template: string): void;
    getUrlPatterns(): string[];
    setContext(context: JsletContext): void;
    service(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;
    doDelete(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;
    doGet(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;
    doOptions(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;
    doTrace(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;
    doHead(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;
    doConnect(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;
    doPut(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;
    doPost(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;
}

export interface Jslet {
    init(): void;
    destroy(): void;
    before(): void;
    after(): void;
    getContext(): JsletContext;
    service(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;
}

export interface SecurityContext {
    addSecurityRole(role: SecurityRole): void;
    getSecurityRole(name: string): SecurityRole;
    addSecurityConstraint(constraint: SecurityConstraint): void;
    getSecurityConstraint(url: string): SecurityConstraint;
    addStaticResources(resources: StaticResources): void;
    getStaticResources(url: string): StaticResources;
    getContextRoot(): string;
}

export interface SessionContext {
    getContextRoot(): string;
    getErrorUrl(): string;
    invalidateSession(req: HttpRequest, result: (error?: SessionError) => any): void;
    initSessionId(): SessionId;
    initSession(req: HttpRequest, sessionOwner: SessionOwner, result: (error?: SessionError) => any): void;
    loadSession(sessionId: SessionId, result: (error?: SessionError) => any): void;
    unloadSession(sessionId: SessionId, result: (error?: SessionError) => any): void;
    refreshSession(sessionId: SessionId, data: any, result: (error?: SessionError) => any): void;
    hasSession(sessionId: SessionId): boolean;
    getSession(sessionId: SessionId): Session;
}

export interface SessionError {
    getSessionId(): SessionId;
    getErrorType(): string;
    getMessage(): string;
}

export class SessionErrorType {
    static readonly SESSION_EXPIRED: string;
    static readonly INVALID_SESSION_ID: string;
    static readonly SESSION_PERSISTENCE_FAILED: string;
}

export interface SecurityRole {
    getName(): string;
}

export interface Session {
    sessionId: SessionId;
    sessionOwner: SessionOwner;
    expires: number;
    data: any;
}

export interface SessionId {
    authurl: string;
    getId(): string;
}

export interface SessionOwner {
    getAlias(): string;
    isGranted(securityConstraint: SecurityConstraint): boolean;
}

export interface Credentials {
    login: string;
    password: string;
}

export interface SecurityConstraint {
    getName(): string;
    getUrlPattern(): UrlPattern;
    hasRole(role: string): boolean;
    getErrorUrl(): string;
}

export interface StaticResources {
    getUrlPattern(): UrlPattern;
}

}