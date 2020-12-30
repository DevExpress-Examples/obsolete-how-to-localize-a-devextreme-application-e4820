# Obsolete: How to localize a DevExtreme application

<p><strong>Starting with version 13.2, please </strong><strong>follow </strong><strong>recommendations </strong><strong>from the</strong><strong> </strong><a href="https://js.devexpress.com/Documentation/Guide/Common/Localization/"><strong><u>Localization</u></strong></a><strong> help topic.</strong></p>

<p><strong>For version 13.1 and older</strong></p>
<p>This example demonstrates how to localize a DevExtreme application. The main idea is to create a "hash table" that contains all the necessary captions and titles associated with a corresponding language. When an application is loaded, the required titles are applied to elements on your views. The example allows you to change the current language at runtime.  We use LocalStore to save/restore the selected language between application re-execution.</p>

<br/>


