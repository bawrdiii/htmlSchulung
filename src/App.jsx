const App = () => {
  return (
    <div>
      <header>
        <h1>Top 20 HTML Tags Explained</h1>
        <p>
          Welcome to this basic guide where we explain the top 20 HTML tags you
          should know when building web pages.
        </p>
      </header>
      <main>
        <section>
          <h2>1. &lt;html&gt;</h2>
          <p>
            The <code>&lt;html&gt;</code> tag represents the root of an HTML
            document. All other tags go inside this tag.
          </p>
        </section>

        <section>
          <h2>2. &lt;head&gt;</h2>
          <p>
            The <code>&lt;head&gt;</code> tag contains meta-information about
            the HTML document, such as the title and links to external
            stylesheets.
          </p>
        </section>

        <section>
          <h2>3. &lt;title&gt;</h2>
          <p>
            The <code>&lt;title&gt;</code> tag defines the title of the HTML
            document, which is shown in the browser’s title bar or tab.
          </p>
        </section>

        <section>
          <h2>4. &lt;meta&gt;</h2>
          <p>
            The <code>&lt;meta&gt;</code> tag provides metadata about the HTML
            document, such as character set, author, and viewport settings.
          </p>
        </section>

        <section>
          <h2>5. &lt;body&gt;</h2>
          <p>
            The <code>&lt;body&gt;</code> tag contains all the visible content
            of a webpage, such as text, images, and links.
          </p>
        </section>

        <section>
          <h2>6. &lt;h1&gt; to &lt;h6&gt;</h2>
          <p>
            The <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags define
            headings. <code>&lt;h1&gt;</code> is the highest heading level, and{" "}
            <code>&lt;h6&gt;</code> is the lowest.
          </p>
        </section>

        <section>
          <h2>7. &lt;p&gt;</h2>
          <p>
            The <code>&lt;p&gt;</code> tag defines a paragraph. Text inside this
            tag is separated from other elements with spacing.
          </p>
        </section>

        <section>
          <h2>8. &lt;a&gt;</h2>
          <p>
            The <code>&lt;a&gt;</code> tag defines a hyperlink. It can be used
            to link to other webpages or files.
          </p>
          <p>
            Example: <a href="https://example.com">Click here</a> to visit
            Example.com.
          </p>
        </section>

        <section>
          <h2>9. &lt;img&gt;</h2>
          <p>
            The <code>&lt;img&gt;</code> tag is used to embed an image in a
            webpage.
          </p>
          <p>
            Example:<img
              src="https://picsum.photos/150/150?random=1"
              alt="Placeholder Image"
            />
          </p>
        </section>

        <section>
          <h2>10. &lt;ul&gt; and &lt;li&gt;</h2>
          <p>
            The <code>&lt;ul&gt;</code> tag defines an unordered list (bulleted
            list), and the <code>&lt;li&gt;</code> tag defines list items.
          </p>
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>
        </section>

        <section>
          <h2>11. &lt;ol&gt; and &lt;li&gt;</h2>
          <p>
            The <code>&lt;ol&gt;</code> tag defines an ordered list (numbered
            list), and <code>&lt;li&gt;</code> defines list items.
          </p>
          <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ol>
        </section>

        <section>
          <h2>12. &lt;div&gt;</h2>
          <p>
            The <code>&lt;div&gt;</code> tag is a container used to group other
            HTML elements for styling or layout purposes.
          </p>
        </section>

        <section>
          <h2>13. &lt;span&gt;</h2>
          <p>
            The <code>&lt;span&gt;</code> tag is an inline container for text or
            other elements, mainly used for styling purposes.
          </p>
        </section>

        <section>
          <h2>14. &lt;form&gt;</h2>
          <p>
            The <code>&lt;form&gt;</code> tag is used to create forms for user
            input. It usually contains input fields like text boxes, radio
            buttons, and submit buttons.
          </p>
        </section>

        <section>
          <h2>15. &lt;input&gt;</h2>
          <p>
            The <code>&lt;input&gt;</code> tag is used to create input fields in
            forms. These fields can be of various types, such as text, password,
            or email.
          </p>
        </section>

        <section>
          <h2>16. &lt;button&gt;</h2>
          <p>
            The <code>&lt;button&gt;</code> tag defines a clickable button in
            forms or webpages.
          </p>
          <button>Click Me</button>
        </section>

        <section>
          <h2>17. &lt;table&gt;, &lt;tr&gt;, &lt;td&gt;</h2>
          <p>
            The <code>&lt;table&gt;</code> tag is used to create a table. Inside
            it, <code>&lt;tr&gt;</code> defines rows and <code>&lt;td&gt;</code>{" "}
            defines cells.
          </p>
          <table border="1">
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
          </table>
        </section>

        <section>
          <h2>18. &lt;header&gt;</h2>
          <p>
            The <code>&lt;header&gt;</code> tag defines the header section of a
            webpage. It often contains navigation menus or introductory content.
          </p>
        </section>

        <section>
          <h2>19. &lt;footer&gt;</h2>
          <p>
            The <code>&lt;footer&gt;</code> tag defines the footer section of a
            webpage, often containing contact information or links.
          </p>
        </section>

        <section>
          <h2>20. &lt;nav&gt;</h2>
          <p>
            The <code>&lt;nav&gt;</code> tag defines a section of navigation
            links for a webpage.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2024 HTML Guide. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
